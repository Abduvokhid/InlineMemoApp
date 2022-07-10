function ShareButton ({onChange}) {
  return <>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="name" id="name" placeholder="Text of the button"/>
    </div>
    <div class="form_item">
      <textarea onInput={onChange} rows="5" required="required" maxlength="1000" name="message" id="message"
             placeholder="Message text (1000 symbols)"/>
    </div>
  </>
}

export default ShareButton
