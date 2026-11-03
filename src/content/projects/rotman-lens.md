---
title: 'Non-Focal Rotman Lens for 360° Beam Steering at 24 GHz'
summary: 'A passive microstrip beamformer that uses many pseudo-focal points to cut phase error across the scan range, synthesized in MATLAB and simulated in Ansys HFSS.'
dateText: '2025–26'
role: 'Undergraduate researcher, Opportunity Research Scholars program'
tags: ['MATLAB', 'Ansys HFSS', 'Microstrip', 'Optimization']
image: '../../assets/projects/rotman-lens-layout.jpg'
links:
  - label: 'Read the full paper (PDF)'
    href: '/reports/rotman-lens-report.pdf'
order: 2
---
A Rotman lens steers a beam without active phase shifters: path-length differences between its beam ports and array ports produce the phase progression a linear array needs. This team project designed a non-focal lens for 24 GHz (high-band 5G), using a generalized elliptical beam contour with many pseudo-focal points instead of the classic three focal points.

Team: Krishiv Aggarwal, Mansi Bhardwaj, Thawin Serivivatanavongse, Arnav Sharma. Advised by Dr. Andrew Peterson, with PhD mentor Nicholas Garber.

**My contribution**

- Optimized the lens geometry in MATLAB (constrained nonlinear optimization with `fmincon`) to minimize phase error across all beam ports.

**Design**

- 11 beam ports and 11 array ports, ±30° scan, 0.5 λ element spacing, with dummy ports to reduce reflections
- 11 pseudo-focal points, which lowered the aggregate RMS phase error compared with conventional designs
- Microstrip on Rogers 4350B with impedance-matched tapers, generated as full PCB geometry from MATLAB
- 11-element U-slot patch antenna array designed in Ansys HFSS for wider bandwidth

The paper is pending publication on IEEE Xplore. Next steps are fabricating the PCB and measuring the S-parameters and radiation patterns.
