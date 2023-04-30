import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Экономьте время и деньги!</h1>
      <span className="mailDesc">Подпишитесь, и мы будем отправлять вам самые выгодные предложения</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Ваша электронная почта" />
        <button>Подписаться</button>
      </div>
    </div>
  )
}

export default MailList