# Vortex State 🌀

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Size](https://img.shields.io/badge/Size-<2KB-brightgreen.svg)](https://bundlephobia.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Vortex State** is a lightweight, reactive state management library for TypeScript applications. It leverages the native **Proxy API** to provide a seamless and performant way to manage global state without boilerplate.

## 🚀 Features

- 🪶 **Ultra Lightweight**: Less than 2KB gzipped.
- ⚛️ **Reactive**: Automatically tracks dependencies and updates UI.
- 🛡️ **Type Safe**: First-class TypeScript support with full auto-completion.
- 🔌 **Framework Agnostic**: Works with React, Vue, or Vanilla JS.
- 🛠️ **Zero Boilerplate**: No actions, reducers, or complex setup.

## 📦 Installation

```bash
npm install vortex-state
```

## 💻 Usage

```typescript
import { createStore } from 'vortex-state';

const store = createStore({
  count: 0,
  increment() { this.count++; }
});

store.subscribe(() => {
  console.log('Count changed:', store.count);
});

store.increment();
```

## 📄 License

MIT License.
