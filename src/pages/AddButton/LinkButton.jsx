function LinkButton ({onChange}) {
  return <>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="name" id="name" placeholder="Text of the button"/>
    </div>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="link" id="link" placeholder="URL link of the button"/>
    </div>
  </>
}

export default LinkButton
