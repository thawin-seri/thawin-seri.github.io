---
title: '10-bit, 5 MS/s Asynchronous SAR ADC'
summary: 'A 10-bit successive-approximation ADC in 65 nm CMOS with a self-timed two-stage dynamic comparator, reaching 8.81 effective bits at 126 µW.'
dateText: 'Summer 2026'
role: 'Analog design intern, Analog Devices'
tags: ['Cadence Virtuoso', 'Spectre', 'Monte Carlo', 'Python']
image: '../../assets/projects/sar-adc-architecture.png'
links:
  - label: 'Read the full report (PDF)'
    href: '/reports/sar-adc-report.pdf'
order: 1
---
A 10-bit, 5 MS/s asynchronous SAR ADC designed and characterized at the schematic level in TSMC 65 nm CMOS with a 1 V supply, with mentorship from the IC design team at Analog Devices. Co-author: Passapan Sanguanchua (UIUC).

**Architecture**

- V<sub>CM</sub>-based capacitor switching with a binary-weighted capacitive DAC (1 fF unit capacitor)
- Bootstrapped sampling switches with a dummy device for charge-injection cancellation
- Self-timed conversion loop: the comparator generates its own clock, so each bit takes only as long as it needs

**Comparator**

- Two-stage (double-tail) dynamic comparator with no static bias current
- Added a gated precharge and an idle-state tail device to suppress kickback and leakage
- Full 10-bit conversion in 44.3 ns at the slowest corner (SS, −40 °C) against a 150 ns budget
- Input-referred noise below the quantization noise at the typical corner
- Offset characterized with 400-run mismatch Monte Carlo: σ = 2.21 mV

**Results (TT, 25 °C)**

| Metric | Value |
|---|---|
| SNDR / ENOB | 54.77 dB / 8.81 bit |
| SFDR | 62.99 dBc |
| Max INL / DNL | 1.06 / 0.49 LSB |
| Power | 126.4 µW |
| Walden FoM | 56.3 fJ/conv.-step |

The report also proposes a delta-length capacitor layout to realize sub-femtofarad unit capacitors in future iterations.
