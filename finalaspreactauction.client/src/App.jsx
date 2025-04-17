import CarList from "./Components/Fetch/CarList"
import Header from "./Components/Page/Header"
import Footer from "./Components/Page/Footer"
import ModelList from "./Components/Fetch/ModelList"
import Example from "./Components/Example/Example"
import CarouselForDetails from "./Components/Example/carousel"
import Auction from "./Components/Auction/AuctionHandle"
import ExitAnimation from "./Components/Example/Animation"
import ChatBotWithAI from "./Components/Example/ChatGPTComponent"
import Carousel from "./Components/Example/CarouselUI"
import ForAdmin from "./Components/Example/ForAdmin"
import Button from "./Components/Example/Button"

function App() {
    return (
        <div>
            <Header />
            <CarList />
            <Carousel />
            <CarouselForDetails />
            <Footer />
            <ExitAnimation />
            <ModelList />
            <ChatBotWithAI />
            <Auction />
            <ForAdmin />
            {/*<Example />*/}
            {/*<App1 />*/}
            {/*<App111/>*/}
        </div>
    )
}

export default App