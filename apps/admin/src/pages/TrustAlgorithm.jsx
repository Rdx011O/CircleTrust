// Module 5 — Trust Algorithm Control Panel
import { useState } from 'react'
import { Zap, Save, Eye, RotateCcw } from 'lucide-react'
import PageHeader from '../components/PageHeader'

function SliderRow({ label, desc, min = 0, max = 100, step = 1, unit = '%', defaultVal = 50 }) {
    const [val, setVal] = useState(defaultVal)
    return (
        <div style={{ marginBottom: 20 }}>
            <div className="flex justify-between items-center" style={{ marginBottom: 6 }}>
                <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{label}</div>
                    <div style={{ fontSize: '0.73rem', color: 'var(--text-muted)' }}>{desc}</div>
                </div>
                <span className="range-value">{val}{unit}</span>
            </div>
            <div className="range-wrap">
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', minWidth: 24 }}>{min}</span>
                <input
                    type="range"
                    className="form-range"
                    min={min} max={max} step={step}
                    value={val}
                    onChange={e => setVal(Number(e.target.value))}
                />
                <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', minWidth: 24, textAlign: 'right' }}>{max}</span>
            </div>
        </div>
    )
}

function ToggleRow({ label, desc, defaultOn = false }) {
    const [on, setOn] = useState(defaultOn)
    return (
        <div className="toggle-wrap" style={{ marginBottom: 10 }}>
            <div>
                <div className="toggle-label">{label}</div>
                <div className="toggle-desc">{desc}</div>
            </div>
            <label className="toggle-switch">
                <input type="checkbox" checked={on} onChange={() => setOn(o => !o)} />
                <span className="toggle-slider" />
            </label>
        </div>
    )
}

export default function TrustAlgorithm() {
    const [showPreview, setShowPreview] = useState(false)

    return (
        <div>
            <PageHeader
                title="Trust Algorithm Control Panel"
                subtitle="Configure scoring weights, risk thresholds, and fraud rules. Preview before applying."
                breadcrumb="Trust Algorithm"
                actions={
                    <div className="flex gap-2">
                        <button className="btn btn-outline btn-sm"><RotateCcw size={14} /> Reset Defaults</button>
                        <button className="btn btn-outline btn-sm" onClick={() => setShowPreview(true)}>
                            <Eye size={14} /> Preview Changes
                        </button>
                        <button className="btn btn-primary btn-sm" disabled={!showPreview}>
                            <Save size={14} /> Apply {!showPreview && '(Preview First)'}
                        </button>
                    </div>
                }
            />

            {/* Simulation Preview Panel */}
            {showPreview && (
                <div className="glass-card mb-6" style={{ border: '1px solid rgba(59,130,246,0.3)', background: 'rgba(59,130,246,0.04)' }}>
                    <div className="card-header">
                        <span className="card-title" style={{ color: 'var(--accent-blue)' }}>
                            <Eye size={15} /> Simulation Preview — Review Before Applying
                        </span>
                        <button className="btn btn-outline btn-sm" onClick={() => setShowPreview(false)}>Close</button>
                    </div>
                    <div className="card-body">
                        <div className="awaiting-block">
                            <div className="connecting-icon">⚙️</div>
                            <p>Simulation preview will render projected trust score impact once the algorithm engine API is connected.</p>
                            <span style={{ fontSize: '0.72rem' }}>
                                Connect the trust computation engine to see projected impact across active users before saving.
                            </span>
                        </div>
                    </div>
                </div>
            )}

            <div className="grid-2">
                {/* Score Weights */}
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title"><Zap size={14} /> Trust Score Formula Weights</span>
                    </div>
                    <div className="card-body">
                        <SliderRow label="Payment History Weight" desc="Influence of on-time payments" defaultVal={35} />
                        <SliderRow label="Circle Tenure Weight" desc="Influence of length in circles" defaultVal={20} />
                        <SliderRow label="Social Graph Weight" desc="Trust from connected members" defaultVal={15} />
                        <SliderRow label="KYC Verification Weight" desc="Verified identity multiplier" defaultVal={20} />
                        <SliderRow label="Behavioral Pattern Weight" desc="Anomaly-free behavior bonus" defaultVal={10} />
                    </div>
                </div>

                {/* Thresholds */}
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title">🎚️ Risk & Entry Thresholds</span>
                    </div>
                    <div className="card-body">
                        <SliderRow label="Min Trust Score to Join Circle" desc="Users below cannot join new circles" min={0} max={100} defaultVal={40} />
                        <SliderRow label="Late Payment Penalty Points" desc="Deducted per missed payment" min={0} max={50} unit="pts" defaultVal={10} />
                        <SliderRow label="Default Ejection Threshold" desc="Auto-remove below this score" min={0} max={100} defaultVal={20} />
                        <SliderRow label="Fraud Sensitivity Level" desc="AI anomaly detection threshold" min={0} max={100} defaultVal={65} />
                        <SliderRow label="Auto-Ban Repeat Offense Count" desc="Number of violations before ban" min={1} max={10} unit="×" defaultVal={3} />
                    </div>
                </div>

                {/* Auto Rules */}
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title">🤖 Auto-Rule Engine</span>
                    </div>
                    <div className="card-body">
                        <ToggleRow label="Auto-Ban on Fraud Detection" desc="Immediately suspend suspected fraudsters" defaultOn={true} />
                        <ToggleRow label="Auto-Freeze Circle on Default" desc="Freeze payout on first member default" defaultOn={false} />
                        <ToggleRow label="KYC Required for Circle Creation" desc="Only verified users can create circles" defaultOn={true} />
                        <ToggleRow label="Auto-Arbitration on Stalemate" desc="Escalate unresolved disputes automatically" defaultOn={true} />
                        <ToggleRow label="Collusion Detection Active" desc="Flag overlapping circle memberships" defaultOn={true} />
                    </div>
                </div>

                {/* Per Metric Number Inputs */}
                <div className="glass-card">
                    <div className="card-header">
                        <span className="card-title">⚡ Advanced Parameters</span>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="form-label">Trust Score Decay Rate (per day)</label>
                            <input type="number" className="form-input" placeholder="e.g. 0.2" min="0" max="5" step="0.1" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Max Circle Size (members)</label>
                            <input type="number" className="form-input" placeholder="e.g. 20" min="2" max="50" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Observation Window (days)</label>
                            <input type="number" className="form-input" placeholder="e.g. 90" min="7" max="365" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Reinstatement Cool-Down (days)</label>
                            <input type="number" className="form-input" placeholder="e.g. 30" min="1" max="180" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
