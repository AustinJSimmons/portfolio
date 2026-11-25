---
title: 'SIM-GPU Series: Fundamental Components of Modern GPUs'
description: 'The SIM-GPU series is about learning the architecture of modern GPUs from scratch.'
date: '2026-06-19'
tags: ['sim-gpu', 'GPU Architecture', 'Systems']
draft: true
---

## Motivation

The motivation of this article is to list and explain all the essential
components of modern GPUs. This list and accompanying explanations will
motivate our simplified modern GPU design/simulation. By the end of this
article I hope to give myself and the reader a basic understanding of
how modern GPUs function.

We will cover the following:

1. What does a modern GPU need to be capable of doing at a baseline? (Functionality)
2. How do modern GPUs accomplish these things? (Components)
3. What is the input/output path through these components? (Data paths)
4. What does our GPU design NEED to include based on desired functionality?

## Notes on Modern Nvidia architectures

### Things to look into Hopper Architecture

- Hopper DPX (Dynamic Programming Instructions)
  - Accelerates a wide range of Dynamic programming algorithms
  (often min/max heavy operations).
- (DSM) Distributed Shared Memory
  - Enables direct SM to SM communication, including loads stores and atomics
  across multiple SM shared memory blocks
- Tensor Cores
- Tensor Memory Accelerator

### Important sources to read through
