---
title: 'Current-Starved Ring Oscillator VCO (SKY130)'
summary: 'A 3-stage current-starved ring oscillator in SkyWater 130 nm that hits 501 MHz at 175 µW and meets every spec at the typical corner.'
dateText: 'Fall 2026'
role: 'Analog/mixed-signal design team'
tags: ['SKY130', 'Cadence Virtuoso', 'Spectre', 'Layout', 'DRC/LVS']
order: 3
---
A voltage-controlled ring oscillator designed to a team spec: 1.8 V supply, 450–550 MHz, ≤ 500 µW, 45–55% duty cycle, and rise/fall ≤ 250 ps into a 1 pF load over 0–70 °C.

**Design**

- 3-stage current-starved ring, with devices sized from hand analysis of stage delay, per-stage load, and body-effect threshold voltage
- 4-stage tapered output buffer to drive the 1 pF load
- Traced an initial ~43% duty-cycle error to the ring stages rather than the output buffer

**Results (TT, 27 °C)**

| Metric | Spec | Achieved |
|---|---|---|
| Frequency | 450–550 MHz | 501.3 MHz |
| Power | ≤ 500 µW | 174.9 µW |
| Duty cycle | 45–55% | 48.2% |
| Rise / fall | ≤ 250 ps | 114 / 162 ps |

- Frequency stays at 487–519 MHz across 0–70 °C, inside spec
- Corner spread from SS @ 0 °C to FF @ 70 °C: 376.5–635.6 MHz
