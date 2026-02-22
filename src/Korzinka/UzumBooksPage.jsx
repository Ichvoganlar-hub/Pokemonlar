import React from 'react'

const UzumBooksPage = () => {
    const [books, setBooks] = useState([]);
    
      useEffect(() => {
       
        fetch("/books.json")
          .then((res) => res.json())
          .then((data) => setBooks(data))
          .catch((err) => console.error("JSON faylni yuklashda xato:", err));
      }, []);
  return (
    <div>
      Corvin, [23.02.2026 1:43]
<div className="bg-[#f5f5f7] min-h-screen text-black">


      <div className="bg-white border-b text-[13px]">
        <div className="max-w-[1440px] mx-auto px-6 py-2 flex justify-between">
          <div className="flex gap-6">
            <span>Toshkent</span>
            <span>Topshirish punktlari</span>
          </div>
          <div className="flex gap-6">
            <span>Sotuvchi bo‘lish</span>
            <span>Buyurtmalarim</span>
            <span>O'zbekcha</span>
          </div>
        </div>
      </div>


      <div className="bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <div className="bg-[#7F4DFF] text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold">
                U
              </div>
              <span className="text-[22px] font-bold text-[#7F4DFF]">
                uzum market
              </span>
            </div>

            <button className="bg-[#f3f0ff] text-[#7F4DFF] px-4 py-2 rounded-lg font-medium">
              Katalog
            </button>

            <input
              placeholder="Mahsulotlar va turkumlar izlash"
              className="w-[520px] h-[42px] px-4 border rounded-lg outline-none"
            />
          </div>

          <div className="flex gap-8 text-[15px]">
            <span>Kirish</span>
            <span>Saralangan</span>
            <span>Savat</span>
          </div>
        </div>
      </div>

    
      <div className="bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-6 py-3 flex gap-6 text-[14px] overflow-x-auto">
          {["Hafta tovarlari","Bahorgi kolleksiya","Smartfonlar","Oziq-ovqat","Mebel","Yana"].map((item,i)=>(
            <span key={i} className="whitespace-nowrap cursor-pointer hover:text-[#7F4DFF]">{item}</span>
          ))}
        </div>
      </div>

     
      <div className="max-w-[1440px] mx-auto px-6 py-6 flex gap-8">
         
<div className="w-[280px] text-[14px] space-y-6">
          <div className="w-[280px] text-[14px] space-y-6">

 
  <div>
    <h2 className="font-semibold mb-3 text-[16px]">Turkumlar</h2>
    <div className="space-y-1">
      {[
        "Barcha turkumlar",
        "Kitoblar",
        "Bolalarga va ota-onalarga",
        "Jurnallar, gazetalar",
        "Chet tillaridagi adabiyotlar",
        "Manga",
        "Nobadiiy adabiyot",
        "Sovgʻa nashrlari",
        "Elektron kitob va audiokitoblarga obunalar",
        "Diniy kitoblar",
        "O‘quv adabiyoti",
        "Badiiy adabiyot",
        "Elektron va raqamli kitoblar"
      ].map((item, i) => (
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-[#7F4DFF]"/>
          <span className="text-[14px]">{item}</span>
        </label>
      ))}
    </div>
  </div>


  <div>
    <h2 className="font-semibold mb-2">Narx, baho, so'm</h2>
    <div className="flex gap-2">
      <input type="number" defaultValue={4880} className="w-1/2 border rounded-md px-2 py-1"/>
      <input type="number" defaultValue={5179000} className="w-1/2 border rounded-md px-2 py-1"/>
    </div>
  </div>

 
  <div>
    <h2 className="font-semibold mb-2">Janr</h2>
    <div className="space-y-1">
      {["1-sinf","2-sinf","3-sinf","4-sinf","10-sinf","11-sinf","Yana 72"].map((item,i)=>(
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-[#7F4DFF]"/>
          <span className="text-[14px]">{item}</span>
        </label>
      ))}
    </div>
  </div>

Corvin, [23.02.2026 1:43]
<div>
    <h2 className="font-semibold mb-2">Muqova</h2>
    <div className="space-y-1">
      {["Yumshoq muqova","Qattiq muqova"].map((item,i)=>(
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-[#7F4DFF]"/>
          <span className="text-[14px]">{item}</span>
        </label>
      ))}
    </div>
  </div>


  <div>
    <h2 className="font-semibold mb-2">Til</h2>
    <div className="space-y-1">
      {["Arab","Koreys","Turk","Rus","O'zbek","Ingliz"].map((item,i)=>(
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-[#7F4DFF]"/>
          <span className="text-[14px]">{item}</span>
        </label>
      ))}
    </div>
  </div>

 
  <div>
    <h2 className="font-semibold mb-2">Brend</h2>
    <div className="space-y-1">
      {["No Brand","ZABARJAD MEDIA","01OME","0story","1000 Art-Hobby-Market","1004 Laboratory","Yana 337"].map((item,i)=>(
        <label key={i} className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="form-checkbox h-4 w-4 text-[#7F4DFF]"/>
          <span className="text-[14px]">{item}</span>
        </label>
      ))}
    </div>
  </div>



</div>


  <div>
    <h2 className="font-semibold mb-2">Ishlab chiqarish mamlakati</h2>
    <div className="space-y-1">
      {["Amerika Samoasi","Angilya","Angliya","Belarusiya","Buyuk Britaniya","Germaniya","Yana 22"].map((item,i)=>(
        <div key={i} className="cursor-pointer px-2 py-1 hover:text-[#7F4DFF]">{item}</div>
      ))}
    </div>
  </div>

</div>



        <div className="flex-1">
          <div className="text-[13px] text-gray-500 mb-3">
            Bosh sahifa / Barcha toifalar / <span className="text-black">Kitoblar</span>
          </div>

          <h1 className="text-[28px] font-semibold mb-2">Kitoblar</h1>
          <div className="text-gray-500 text-[14px] mb-4">66 738 ta tovar</div>

          <div className="flex gap-3 flex-wrap mb-6">
            {["O‘z-o‘zini rivojlantirish","Nasr","Badiiy adabiyot","Zamonaviy nasr","Bolalarning rivojlanishi"].map((chip,i)=>(
              <div key={i} className="bg-[#f3f0ff] text-[#7F4DFF] px-4 py-2 rounded-full text-[13px] cursor-pointer">{chip}</div>
            ))}
          </div>

       
          <div className="grid grid-cols-4 gap-6">
            {books.map((book)=>(
              <div key={book.id} className="bg-white rounded-2xl p-4 hover:shadow-lg transition relative">
                <div className="absolute top-3 left-3 bg-pink-500 text-white text-[11px] px-2 py-1 rounded">ARZON NARX KAFOLATI</div>
                <div className="h-[220px] flex items-center justify-center mb-4">
                  <img src={book.image} alt={book.title} className="max-h-full object-contain"/>
                </div>
                <h3 className="text-[14px] h-[40px] line-clamp-2">{book.title}</h3>
                <p className="text-[#7F4DFF] font-bold mt-2">{book.price.toLocaleString()} so'm</p>
                <button className="w-full mt-3 py-2 rounded-xl text-white font-medium bg-gradient-to-r from-[#7F4DFF] to-[#A66CFF]">Ertaga</button>
              </div>
            ))}
          </div>
        </div>
      </div>

Corvin, [23.02.2026 1:43]
<div className="bg-white border-t mt-12">
        <div className="max-w-[1440px] mx-auto px-6 py-6 flex justify-between text-[14px]">
          <div className="space-y-1">
            <p>Biz haqimizda</p>
            <p>Topshirish punktlari</p>
            <p>Vakansiyalar</p>
            <p>Foydalanuvchilarga</p>
            <p>Biz bilan bog‘lanish</p>
          </div>
          <div className="space-y-1">
            <p>Savol-Javob</p>
            <p>Tadbirkorlarga</p>
            <p>Uzumda soting</p>
            <p>Sotuvchi kabinetiga kirish</p>
          </div>
          <div className="space-y-1">
            <p>Ilovani yuklab olish</p>
            <p>AppStore</p>
            <p>Google Play</p>
            <p>Uzum ijtimoiy tarmoqlarda</p>
          </div>
          <div className="space-y-1">
            <p>Maxfiylik kelishuvi</p>
            <p>Foydalanuvchi kelishuvi</p>
            <p>SHAXSIY MA'LUMOTLARNI QAYTA ISHLASH NIZOMI «UZUM MARKET» MCHJ XK</p>
            <p>«2026© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}

export default UzumBooksPage
