// SAO — minimal interaction layer

document.addEventListener('DOMContentLoaded', () => {

  // Filter chips (visual state only — wire to real inventory when backend is added)
  document.querySelectorAll('.filter-row').forEach(row => {
    const chips = row.querySelectorAll('.chip');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
      });
    });
  });

  // Bag counter — demo behavior for "Add to Bag" spec-tag buttons
  const bagCount = document.querySelector('.bag-count');
  let count = 0;
  document.querySelectorAll('.spec-cta').forEach(btn => {
    btn.addEventListener('click', () => {
      count++;
      if (bagCount) bagCount.textContent = count;
      const original = btn.textContent;
      btn.textContent = 'Added ✓';
      setTimeout(() => { btn.textContent = original; }, 1200);
    });
  });

});
