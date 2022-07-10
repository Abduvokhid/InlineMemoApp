function InlineButton ({ item, rowNumber }) {
  if (!item) return <div class={`col col-inline ${typeof rowNumber === 'number' ? 'col-xs-1' : 'col'}`}>
    <button class="btn btn-secondary btn-inline w-100">
      <div class="btn-block">+</div>
    </button>
  </div>

  return <div class="col col-inline" style={{ 'max-width': `calc((100% - 8.32%)/var(--buttons-row-${rowNumber}))` }}>
    <button class="btn btn-secondary btn-inline w-100">
      <div class="btn-block">{item.name}</div>
    </button>
  </div>
}

export default InlineButton
