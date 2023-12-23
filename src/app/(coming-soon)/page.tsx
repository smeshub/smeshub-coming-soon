import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pb-8">
      <div className="flex bg-gradient-to-r from-[#74b0bf] to-[#c7c804] gap-2 w-full flex-col lg:flex-row">
        <div className="w-full">
          <Image
            alt="coming soon smeshub.id 2020"
            src="/coming-soon.png"
            priority
            width={720}
            height={320}
            className="object-contain object-left-top"
          />
        </div>
        <div className="w-full flex flex-col items-end justify-end p-12 gap-12">
          <Image
            alt="smeshub 2024"
            src="/smeshub-2024.png"
            className="object-right-top"
            priority
            width={480}
            height={160}
          />
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-full py-24 px-12 gap-16 flex-col">
        <p className="text-center text-smeshub text-display-md lg:text-display-lg orphan">
          Fostering a Culture of <b>Collaboration</b>
        </p>
        <div className="w-full flex gap-8 flex-wrap items-center justify-center max-w-screen-xl">
          <Image
            alt="smeshub experience"
            src="/smeshub-experience.png"
            className="object-contain object-center h-[80px]"
            priority
            width={220}
            height={80}
          />
          <Image
            alt="smesfood"
            src="/smesfood.png"
            className="object-contain object-center h-[80px]"
            priority
            width={220}
            height={80}
          />
          <Image
            alt="smestrade"
            src="/smestrade.png"
            className="object-contain object-center h-[80px]"
            priority
            width={220}
            height={80}
          />
          <Image
            alt="smeslive"
            src="/smeslive.png"
            className="object-contain object-center h-[80px]"
            priority
            width={220}
            height={80}
          />
          <Image
            alt="smesacademy"
            src="/smesacademy.png"
            className="object-contain object-center h-[80px]"
            priority
            width={220}
            height={80}
          />
        </div>
      </div>
      <span className="text-link-xs text-smeshub">
        © PT SMESHUB BANGUN NEGERI
      </span>
    </div>
  )
}
