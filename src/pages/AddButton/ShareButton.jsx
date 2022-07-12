function ShareButton ({onChange, input}) {
  return <>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="name" id="name" placeholder={input.name}/>
    </div>
    <div class="form_item">
      <textarea onInput={onChange} rows="5" required="required" maxlength="1000" name="message" id="message"
             placeholder={input.share}/>
    </div>
  </>
}

export default ShareButton
