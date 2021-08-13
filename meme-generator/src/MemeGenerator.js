import React from 'react'

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText:'',
            bottomText:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(res => res.json())
            .then(res =>{
                const {memes} = res.data
                // console.log(memes[0])
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    /**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site (`.url`)
     */
    handleSubmit(event){
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randomNum].url
        this.setState({
             randomImg: randMemeImg
        })


    }

    render(){
        return(
            <div id='container'>
                <form className='meme-form' onSubmit={this.handleSubmit}>
                        <input 
                            type='text' 
                            name='topText'
                            value = {this.state.topText}
                            placeholder = 'Enter top text here'
                            onChange = {this.handleChange} 
                        />
                        <input 
                            type='text' 
                            name='bottomText'
                            value = {this.state.bottomText}
                            placeholder = 'Enter bottom text here'
                            onChange = {this.handleChange} 
                        />
                    <button>Generate meme</button>
                </form>
                <div className = 'meme'>
                    <img src = {this.state.randomImg} alt = 'Random from APIs'/>
                    <h3 className='top'>{this.state.topText}</h3>
                    <h3 className='bottom'>{this.state.bottomText}</h3>
                </div>
            </div>

        )
    }
}
export default MemeGenerator