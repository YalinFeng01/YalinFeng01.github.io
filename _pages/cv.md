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
* [cite_start]M.Sc. in Computer Control & Automation, Nanyang Technological University (NTU), Singapore, 2025-Present [cite: 8, 9, 12]
* [cite_start]B.Eng. in Computer Science & Technology, Henan University, China, 2020-2024 [cite: 11, 13, 14]
* [cite_start]B.Eng. in Software Engineering (Joint Program), Victoria University, Australia, 2020-2024 [cite: 16, 17, 19]

Research Experience
======
* Aug 2025 - Present: Research Assistant
  * [cite_start]Shanghai Academy of AI for Algorithms (IAAR) [cite: 20]
  * [cite_start]Topic: Continual Learning for Personalized Multimodal Generation [cite: 20]
  * [cite_start]Duties included: Addressing catastrophic forgetting in multimodal large language models [cite: 21][cite_start]; proposed a continual learning-based personalization framework incorporating lightweight parameter-efficient fine-tuning[cite: 22].

* May 2025 - Aug 2025: Research Assistant
  * [cite_start]Agency for Science, Technology and Research (A*STAR), Singapore [cite: 25]
  * [cite_start]Topic: Cross-Domain Retrieval-Augmented Generation for Text-to-SQL [cite: 26]
  * [cite_start]Duties included: Investigating limitations of retrieval models and improving retrieval strategies [cite: 27, 28][cite_start]; achieved a relative improvement of 85.2% in retrieval accuracy[cite: 28].

* Aug 2024 - Dec 2024: Research Assistant
  * [cite_start]Nanyang Technological University [cite: 29]
  * [cite_start]Topic: Text-to-Video Generation with Hybrid RNN-Transformer Architectures [cite: 30]
  * [cite_start]Duties included: Designing temporal extension modules to improve inter-frame coherence [cite: 31][cite_start]; reproducing and studying the RWKV architecture[cite: 32].
  * [cite_start]Supervisor: Prof. Tan Yap Peng [cite: 29]

Industry Experience
======
* Feb 2024 - May 2024: Full-Stack Engineer
  * [cite_start]Shenzhen Juding Medical Technology Co., Ltd. (CLEAR) [cite: 34]
  * [cite_start]Duties included: Designed and maintained backend server architecture supporting 30,000+ users [cite: 35][cite_start]; developed core payment modules using Java [cite: 35][cite_start]; implemented high-performance network communication components in C++[cite: 36].

Skills
======
* Programming
  * [cite_start]Python, Java, C++ [cite: 38]
* Frameworks
  * [cite_start]PyTorch, LLaVA [cite: 39]
* Languages
  * [cite_start]Mandarin (Native), English (IELTS 6.5) [cite: 40]
* Research Interests
  * [cite_start]Multimodal Large Language Models, Personalized Generation, Continual Learning, Diffusion Models, Video Generation [cite: 6]

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