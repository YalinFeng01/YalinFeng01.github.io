---
title: "Stable Signer: Hierarchical Sign Language Generative Model"
collection: publications
category: manuscripts
permalink: /publication/2026-04-07-stable-signer-2
excerpt: 'This paper redefines the SLP task as a hierarchical generation end-to-end task, streamlining the traditional redundant structure and introducing a new sign language generative model called Stable Signer. It achieves a 48.6% performance improvement over current SOTA methods.'
date: 2026-04-07
venue: 'ACL 2026 Main Conference (Oral)'
paperurl: 'https://arxiv.org/abs/2512.04048'
citation: 'Sen Fang, <b>Yalin Feng</b>, Hongbin Zhong, Yanxin Zhang, Dimitris N. Metaxas. (2026). "Stable Signer: Hierarchical Sign Language Generative Model." <i>ACL 2026 Main Conference (Oral)</i>.'
---

Sign Language Production (SLP) is the process of converting complex input text into a real video. Most previous works focused on multi-stage processes (Text2Gloss, Gloss2Pose, Pose2Vid), which often led to slow progress due to the inaccuracy of text conversion, pose generation, and the rendering of poses into real human videos in these stages, resulting in gradually accumulating errors. 

Therefore, in this paper, we streamline the traditional redundant structure, simplify and optimize the task objective, and design a new sign language generative model called **Stable Signer**. 

It redefines the SLP task as a hierarchical generation end-to-end task that only includes text understanding (Prompt2Gloss, Text2Gloss) and Pose2Vid. We execute text understanding through our proposed new Sign Language Understanding Linker called **SLUL**, and generate hand gestures through the named **SLP-MoE** hand gesture rendering expert block. Its performance has improved by **48.6%** compared to the current SOTA generation methods.

[Access the full paper on arXiv](https://arxiv.org/abs/2512.04048)