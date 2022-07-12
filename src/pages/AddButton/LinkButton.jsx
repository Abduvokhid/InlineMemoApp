function LinkButton ({onChange, input}) {
  return <>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="name" id="name" placeholder={input.name}/>
    </div>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="link" id="link" placeholder={input.link}/>
    </div>
  </>
}

export default LinkButton
