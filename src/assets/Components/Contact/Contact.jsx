import './Contact.css'

export default function Contact(){
    return(<>
    <div className='Contact'>
    <div>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam temporibus, harum labore aliquid vitae cumque excepturi maiores autem repellat nisi, nobis similique dolorem facere earum! </p>
        <ul>
            <li>facebook</li>
            <li>Instagram</li>
            <li>Trends</li>
        </ul>
    </div>
    

    <div>
    <div>
    <label >User Name</label>
    <input type="text" />
    </div>
    <div>
    <label >e-mail</label>
    <input type="e-mail" />
    </div>
    <div>
    <label>Your message</label>
        <textarea></textarea>
    </div>
    
    </div>
    </div>
    </>)
}