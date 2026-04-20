---
title: "StreamFlow: Theory, Algorithm, and Implementation for High-Efficiency Rectified Flow Generation"
collection: publications
category: manuscripts
permalink: /publication/2025-11-27-streamflow-5
excerpt: 'This article proposes an overall acceleration pipeline for Rectified Flow models, achieving up to 611% speedup in image generation using novel batch processing and dynamic TensorRT compilation.'
date: 2025-11-27
venue: 'arXiv preprint'
paperurl: 'https://arxiv.org/abs/2511.22009'
citation: 'Sen Fang, Hongbin Zhong, <b>Yalin Feng</b>, Yanxin Zhang, Dimitris N. Metaxas. (2025). "StreamFlow: Theory, Algorithm, and Implementation for High-Efficiency Rectified Flow Generation." <i>arXiv preprint arXiv:2511.22009</i>.'
---

New technologies such as Rectified Flow and Flow Matching have significantly improved the performance of generative models in the past two years, especially in terms of control accuracy, generation quality, and generation efficiency. However, due to some differences in its theory, design, and existing diffusion models, the existing acceleration methods cannot be directly applied to the Rectified Flow model. 

In this article, we have comprehensively implemented an overall acceleration pipeline from the aspects of theory, design, and reasoning strategies. This pipeline uses new methods such as:
* Batch processing with a new velocity field
* Vectorization of heterogeneous time-step batch processing
* Dynamic TensorRT compilation 

These new methods comprehensively accelerate related models based on flow models. Currently, the existing public methods usually achieve an acceleration of 18%, while experiments have proved that our new method can accelerate the 512*512 image generation speed to **up to 611%**, which is far beyond the current non-generalized acceleration methods.

[Access the full paper on arXiv](https://arxiv.org/abs/2511.22009)