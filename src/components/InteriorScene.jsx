export function InteriorScene() {
  return (
    <div className="scene-card" aria-hidden="true">
      <div className="scene-glow" />
      <div className="scene">
        <div className="scene__ceiling" />
        <div className="scene__wall scene__wall--left" />
        <div className="scene__wall scene__wall--right" />
        <div className="scene__floor" />
        <div className="scene__rug" />
        <div className="scene__console" />
        <div className="scene__frame" />
        <div className="scene__sofa">
          <span className="scene__sofa-seat" />
          <span className="scene__sofa-back" />
          <span className="scene__sofa-arm scene__sofa-arm--left" />
          <span className="scene__sofa-arm scene__sofa-arm--right" />
        </div>
        <div className="scene__table">
          <span className="scene__table-top" />
          <span className="scene__table-leg" />
        </div>
        <div className="scene__lamp">
          <span className="scene__lamp-stem" />
          <span className="scene__lamp-head" />
        </div>
      </div>

      <div className="floating-card floating-card-top">
        <span>Scene logic</span>
        <strong>Light, texture, circulation</strong>
      </div>

      <div className="floating-card floating-card-bottom">
        <span>Website mood</span>
        <strong>Editorial, tactile, premium</strong>
      </div>
    </div>
  )
}
