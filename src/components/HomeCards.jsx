import { Link } from "react-router-dom";
import Card from "./Card";
const HomeCards = () => {
    return (
        <section className='py-4'>
            <div className='container-xl lg:container m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                    <Card>
                        <h2 className='text-2xl font-bold'>Geliştiriciler İçin</h2>
                        <p className='mt-2 mb-4'>
                           Yazılım iş ilanlarına göz atın ve hayalinizdeki işe girin.
                        </p>
                        <Link to='/is-ilanlari' className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'>İş İlanlarına Göz Atın</Link>
                    </Card>
                    <Card bg='bg-cyan-200'>
                        <h2 className='text-2xl font-bold'>İşverenler İçin</h2>
                        <p className='mt-2 mb-4'>
                            Kriterlerinize uyan en iyi yazılımcıları işe alın.
                        </p>
                        <Link to='/is-ilani-ekle' className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'>İş İlanı Ekle</Link>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default HomeCards