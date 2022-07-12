function SharePostButton ({ onChange, input }) {
  return <>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="name" id="name" placeholder={input.name}/>
    </div>
  </>
}

export default SharePostButton
