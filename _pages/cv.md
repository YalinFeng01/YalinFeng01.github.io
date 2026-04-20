---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.S. in [Computer Control&Automation], **Nanyang Technological University (NTU)**, Singapore, 2026 (Expected)
* B.S. in [Information Technology], **[Victorial University]**, Australia, [2024.6.30]

Research Experience
======
* **Graduate Researcher**
  * Nanyang Technological University (NTU)
  * Focus: MLLM, Pose Generation, AIGC
  * "Stable Signer: Hierarchical Sign Language Generative Model" (Accepted ACL 2026(oral))
Skills
======
* **Research Domains:** Generative AI, Diffusion Models, Flow Matching, Latent Diffusion, Controllable Generation
* **Programming & Frameworks:** Python, PyTorch, C/C++ 
* **System & Infrastructure:** High-Performance Computing (HPC) cluster management, Slurm, WSL administration, Git, Docker

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and Leadership
======
* *Add any peer review experience, academic community service, or student leadership roles here (e.g., Reviewer for CVPR / ECCV).*