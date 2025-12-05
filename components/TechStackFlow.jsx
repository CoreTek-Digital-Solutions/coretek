// components/TechStackFlow.jsx
"use client";
import React, { useRef, useState, useEffect } from "react";

/*
 Draggable tech "wireframe" visualization.
 Drop into components/TechStackFlow.jsx
*/

const DEFAULT_NODES = [
  { id: "laravel", label: "Laravel", pct: 98, color: "#FF6B6B" },
  { id: "vue", label: "Vue.js", pct: 90, color: "#42b883" },
  { id: "js", label: "JavaScript", pct: 95, color: "#f0db4f" },
  { id: "node", label: "Node.js", pct: 90, color: "#68a063" },
  { id: "php", label: "PHP", pct: 99, color: "#777bb3" },
  { id: "tailwind", label: "Tailwind", pct: 92, color: "#38bdf8" },
  { id: "css", label: "CSS", pct: 99, color: "#2965f1" },
  { id: "html", label: "HTML", pct: 100, color: "#e34f26" },
];

export default function TechStackFlow({ width = 980, height = 420, nodes = DEFAULT_NODES }) {
  const svgRef = useRef(null);
  const [positions, setPositions] = useState(() => computeInitialPositions(nodes, width, height));
  const dragState = useRef({ draggingId: null, offsetX: 0, offsetY: 0 });

  useEffect(() => {
    setPositions((prev) => computeInitialPositions(nodes, width, height, prev));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);

  function onPointerDown(e, id) {
    const svg = svgRef.current;
    if (!svg) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const cursor = pt.matrixTransform(svg.getScreenCTM().inverse());
    const pos = positions[id] || { x: cursor.x, y: cursor.y };
    dragState.current = { draggingId: id, offsetX: cursor.x - pos.x, offsetY: cursor.y - pos.y };
    try { e.target.setPointerCapture(e.pointerId); } catch (err) {}
  }

  function onPointerMove(e) {
    const svg = svgRef.current;
    if (!svg) return;
    const { draggingId, offsetX, offsetY } = dragState.current;
    if (!draggingId) return;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX; pt.y = e.clientY;
    const cursor = pt.matrixTransform(svg.getScreenCTM().inverse());
    const x = clamp(cursor.x - offsetX, 32, width - 32);
    const y = clamp(cursor.y - offsetY, 32, height - 32);
    setPositions((prev) => ({ ...prev, [draggingId]: { x, y } }));
  }

  function onPointerUp() { dragState.current = { draggingId: null, offsetX: 0, offsetY: 0 }; }

  function curvePath(a, b) {
    const dx = b.x - a.x, dy = b.y - a.y;
    const cx1 = a.x + dx * 0.35, cy1 = a.y + dy * 0.05;
    const cx2 = a.x + dx * 0.65, cy2 = a.y + dy * 0.95;
    return `M ${a.x} ${a.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${b.x} ${b.y}`;
  }

  const centralId = "laravel";
  const connections = [];
  nodes.forEach((n) => { if (n.id !== centralId) connections.push([centralId, n.id]); });
  connections.push(["vue", "js"], ["node", "php"], ["tailwind", "css"]);

  return (
    <div className="p-4">
      <div className="max-w-full overflow-auto rounded-lg shadow-sm bg-white/80 dark:bg-slate-900/60">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${width} ${height}`}
          width={width}
          height={height}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <defs>
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.12" />
            </filter>
          </defs>

          {/* wires */}
          <g strokeWidth="2" fill="none" strokeLinecap="round">
            {connections.map(([aId, bId], idx) => {
              const a = positions[aId], b = positions[bId];
              if (!a || !b) return null;
              const path = curvePath(a, b);
              return (
                <g key={idx}>
                  <path d={path} stroke="rgba(100,100,120,0.07)" strokeWidth="12" />
                  <path d={path} stroke="#cbd5e1" strokeWidth="2" />
                </g>
              );
            })}
          </g>

          {/* nodes */}
          {nodes.map((n) => {
            const pos = positions[n.id];
            if (!pos) return null;
            const radius = 36;
            return (
              <g key={n.id} transform={`translate(${pos.x},${pos.y})`} style={{ touchAction: "none" }}>
                <circle r={radius} fill={n.color} filter="url(#shadow)" onPointerDown={(e) => onPointerDown(e, n.id)} />
                <circle r={radius - 10} fill="rgba(255,255,255,0.06)" />
                <foreignObject x={-80} y={radius + 8} width={160} height={56}>
                  <div xmlns="http://www.w3.org/1999/xhtml" className="text-center">
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{n.label}</div>
                    <div style={{ fontSize: 12, color: "#475569", marginTop: 4 }}>{n.pct}%</div>
                  </div>
                </foreignObject>
              </g>
            );
          })}

          {/* legend */}
          <g>
            <rect x="14" y="12" rx="8" ry="8" width="260" height="58" fill="rgba(255,255,255,0.95)" stroke="rgba(2,6,23,0.04)" />
            <text x="28" y="34" style={{ fontSize: 14, fontWeight: 700, fill: "#0f172a" }}>
              Our Tech stack
            </text>
            <text x="28" y="52" style={{ fontSize: 12, fill: "#475569" }}>
              Focus: Laravel {nodes.find((n)=>n.id==="laravel")?.pct ?? ""}%
            </text>
          </g>
        </svg>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 max-w-full">
        {nodes.map((n) => (
          <div key={n.id} className="flex items-center gap-3 text-sm">
            <span style={{ width: 12, height: 12, background: n.color, display: "inline-block", borderRadius: 4 }} />
            <div className="text-xs text-slate-600 dark:text-slate-300">
              <strong className="mr-2">{n.label}</strong>
              {n.pct}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* utils */
function computeInitialPositions(nodes, width, height, prev = {}) {
  const centerX = width / 2;
  const topY = height * 0.28;
  const bottomY = height * 0.68;
  const sorted = [...nodes];
  sorted.sort((a,b)=>(a.id==="laravel"? -1 : b.id==="laravel"? 1:0));
  const top = sorted.filter((_,i)=> i%2===0);
  const bottom = sorted.filter((_,i)=> i%2===1);
  const positions = {};
  const spacingTop = width / (top.length + 1);
  const spacingBottom = width / (bottom.length + 1);
  top.forEach((n,i)=> positions[n.id] = { x: prev[n.id]?.x ?? spacingTop*(i+1), y: prev[n.id]?.y ?? topY });
  bottom.forEach((n,i)=> positions[n.id] = { x: prev[n.id]?.x ?? spacingBottom*(i+1), y: prev[n.id]?.y ?? bottomY });
  if (positions["laravel"]) positions["laravel"].x = centerX;
  return positions;
}
function clamp(v,a,b){ return Math.max(a, Math.min(b, v)); }
