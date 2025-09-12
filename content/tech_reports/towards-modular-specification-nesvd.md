---
title: Specifying a Hypervisor in Separation Logic
where: NESVD'24
thumbnail: /tech_reports/specifying-a-hypervisor-in-separation-logic.png
links:
  slides: /tech_reports/specifying-a-hypervisor-in-separation-logic-slides.pdf
  conference: https://svd.csail.mit.edu/2024/
short: >
   An overview of our work on verifying the NOVA microkernel circa 2024.
date: 2024-04-26
authors:
- Hoang-Hai Dang
- David Swasey
- Gregory Malecha
---

Operating systems provide an interesting challenge for specification because they require low level specifications that talk directly about system resources. In this talk, we present our specification of the NOVA microhypervisor, a modern, concurrent microkernel with virtualization extensions. Our specification approach connects an operational semantics of user mode code with a handler describing the effects of privileged operations using separation logic. In addition to proving some functions within the NOVA implementation, we have also verified a large amount of user code against this specification. 
