---
title: 'Mermaid.js Example'
description: 'An example of using Mermaid.js in Astro blog posts'
pubDate: 'Jul 22 2023'
heroImage: '../../blog/blog-placeholder-2.jpg'
---

# Mermaid.js in Astro

This is an example of how to use Mermaid.js in your Astro blog posts.

## Flow Chart

```mermaid
graph TD
    A[Start] --> B{Is it?}
    B -- Yes --> C[OK]
    C --> D[Rethink]
    D --> B
    B -- No ----> E[End]
```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

This demonstrates that we can now use Mermaid.js diagrams in our Markdown content!