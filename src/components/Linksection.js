import slack from './assets/slack.png';
import github from './assets/github.png'
function LinkSection() {
    return (
        <section>
            <div className='links'>
                <a href='https://twitter.com/GoldenEhis' id='twitter_link'>Twitter Link</a>
                <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Team</a>
                <a href='https://books.zuri.team/' id='books'>Zuri Books</a>
                <a href='https://books.zuri.team/python-for-beginners?ref_id=godswillehis' id='book__python'>Python Books</a>
                <a href='https://background.zuri.team/' id='pitch'>Background Check For Coders</a>
                <a href='https://books.zuri.team/design-rules' id='book__design'>Design Books</a>
            </div>
            <div className='social'>
                <img src={slack} alt='slack' />
                <img src={github} alt='github' />
            </div>
        </section>
    )
}

export default LinkSection;