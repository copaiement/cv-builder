export function toggleInput() {
  // collapse input
  const input = document.querySelector('.inputForm');
  input.classList.toggle('collapse');
  // flip collapse arrow
  const arrow = document.querySelector('.menuBtn')
  arrow.classList.toggle('flip');
}