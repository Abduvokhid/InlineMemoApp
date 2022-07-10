function SharePostButton ({onChange}) {
  return <>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="name" id="name" placeholder="Text of the button"/>
    </div>
  </>
}

export default SharePostButton
