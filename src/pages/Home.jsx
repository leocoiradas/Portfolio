import Introduction from "../components/Introduction";


function Home(){
    return(
        <main className="flex flex-col justify-center items-center w-full h-[90vh] gap-8">
        
            <h3 className="text-yellow-500 text-center text-3xl">Presentación</h3>
            <Introduction />
        </main>
    )
}

export default Home