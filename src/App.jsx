import Documents from "./components/cards/Documents"
import MainMenu from "./components/cards/MainMenu"
import NumProcess from "./components/cards/NumProcess"
import Notes from "./components/cards/Notes"
import Indicators from "./components/cards/Indicators"
import CustomKeyWord from "./components/cards/CustomKeyWord"
import Temporalidade from "./components/cards/Temporalidade"
import ReuniaoJulgamento from "./components/cards/ReuniaoJulgamento"
import Pendencias from "./components/cards/Pendencias"

export default function App() {
  return (
      <div className="grid bg-[#F7F9FA] h-svh w-full grid-cols-4 grid-rows-8 p-2 gap-4">
          <div className="col-span-1 row-span-8 bg-white rounded-lg">
              <Documents />
          </div>
          <div className="col-span-3 row-span-1 bg-white rounded-lg">
              <MainMenu />
          </div>
          <div className="col-span-2 row-span-2 bg-white rounded-lg">
              <NumProcess />
          </div>
          <div className="col-span-1 row-span-5 bg-white rounded-lg">
              <Notes />
          </div>
          <div className="col-span-2 row-span-1 rounded-lg bg-white">
              <Indicators />
          </div>
          <div className="col-span-1 row-span-1 bg-white rounded-lg">
              <Temporalidade />
          </div>
          <div className="col-span-1 row-span-4 bg-white rounded-lg">
              <CustomKeyWord />
          </div>
          <div className="col-span-1 row-span-3 bg-white rounded-lg">
              <ReuniaoJulgamento />
          </div>
          <div className="col-span-1 row-span-2 bg-white rounded-lg">
              <Pendencias />
          </div>
      </div>
  )
}
