import { printError, printSuccess } from './utils';

export function handleKeydown(query: string) {
  // 增加对query的基本验证，以减少潜在的安全风险
  if (!query || typeof query !== 'string' || query.trim() === '') {
    printError('输入的查询字符串无效。');
    return;
  }
  const cleanedQuery = query.trim(); // 清理并缓存query

  // 如果 document.querySelectorAll(query) 个数 多余1 就提示错误并返回。
  if (document.querySelectorAll(query).length > 1) {
    printError(`指定的输入框: ${query} 不是唯一的输入框`);
    return;
  }

  // 避免在每次keydown事件时都重复查询DOM和移除/添加监听器
  let form: HTMLInputElement | null = document.querySelector(
    cleanedQuery,
  ) as HTMLInputElement;
  if (!form || form.tagName !== 'INPUT') {
    printError(`无法找到指定的输入框: ${cleanedQuery}`);
    return;
  }

  // 监听器只添加一次，避免重复添加
  document.documentElement.removeEventListener('keydown', handleKeyDownEvent); // 以防之前已添加
  document.documentElement.addEventListener('keydown', handleKeyDownEvent);
  function handleKeyDownEvent(event: KeyboardEvent) {
    // 正确处理按下'/'键的逻辑
    if (event.key === '/') {
      if (form) {
        form.focus(); // 将焦点设置到输入框。
        printSuccess(`已聚焦到输入框${cleanedQuery}`);

        // 保留原有逻辑
        const tempv: string = form.value; // 保存当前输入框的值。
        form.value = ''; // 短暂清空输入框的值。
        form.value = tempv; // 将先前的值重新赋回输入框。
      }
      event.preventDefault(); // 阻止默认行为，例如在浏览器中打开新标签页。
    }
  }
}

// 使用一个WeakMap来存储是否已绑定事件的状态，这样不会增加实例的引用计数，避免内存泄露
const eventBound = new WeakMap();

export function handleEsc() {
  // 检查事件是否已经绑定，如果没有则进行绑定
  if (!eventBound.has(document.documentElement)) {
    document.documentElement.addEventListener('keydown', (event) => {
      // 防止对非Escape键做出响应
      if (event.key !== 'Escape') {
        return;
      }
      try {
        // 安全地尝试失去焦点操作
        if (document.activeElement instanceof HTMLInputElement) {
          document.activeElement.blur();
        }
      } catch (error) {
        printError('Error while blurring the active element.');
        // 失去焦点操作失败时的备用逻辑（如果有需要）
      }
    });
    eventBound.set(document.documentElement, true);
  }
}
