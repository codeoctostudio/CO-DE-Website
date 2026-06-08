export default function UnityPage() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <iframe
        title="Unity WebGL"
        // 🌟 ชี้ไปที่โฟลเดอร์ใน public ได้โดยตรง เริ่มต้นด้วย /
        src="/UnityTest/index.html" 
        style={{ border: "none", width: "100%", height: "100%" }}
        allow="fullscreen; autoplay; xr-spatial-tracking; clipboard-read; clipboard-write"
      />
    </div>
  );
}