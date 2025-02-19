import { CarouselProvider, Dot, DotGroup, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import { Tween } from 'react-gsap';
import { Helmet } from 'react-helmet';
import { Controller, Scene } from 'react-scrollmagic';

import banner from './assets/banner.png';
import bestseller from './assets/bestseller.png';
import cable from './assets/cable.svg';
import clock from './assets/clock.svg';
import cs from './assets/cs.png';
import fb from './assets/facebook.svg';
import ig from './assets/instagram.svg';
import intetic from './assets/intetic.png';
import laptop from './assets/laptop.png';
import mail from './assets/mail.svg';
import recommended from './assets/receomended.png';
import up from './assets/up.svg';
import wa from './assets/wa.svg';
import wooz from './assets/wooz.png';
import wrench from './assets/wrench.svg';
import i1 from './assets/i1.png';
import i2 from './assets/i2.png';
import i3 from './assets/i3.png';

export default function App() {
    const [paket, setPaket] = React.useState("home");
    const [openSurvei, setOpenSurvei] = React.useState(true);

    const onClickDropdownSurvei = () => {
        setOpenSurvei((prev) => !prev);
    }

    return (
        <Controller>
            <Helmet>
                <meta property="og:title" content="Wooz" />
                <meta property="og:site_name" content="Wooz" />
                <meta property="og:url" content="" />
                <meta property="og:description" content="Nikmati Internet Cepat dan Stabil di Rumah Bersama WOOZZ" />
                <meta property="og:type" content="" />
                <meta property="og:image" content="https://ik.imagekit.io/p4ukigs1hrvx/web%20banner%202_oe1yBX0Ov.png?updatedAt=1734856060428" />
            </Helmet>
            <section className='m-5 rounded-xl overflow-hidden md:rounded-none md:m-0'>
                <CarouselProvider
                    naturalSlideWidth={500}
                    naturalSlideHeight={160}
                    totalSlides={3}
                    infinite
                    visibleSlides={1}
                    interval={1000}
                    className='relative'
                >
                    <Slider>
                        <Slide index={0}>
                            <div className="w-full h-full relative bg-primary-blue">
                                <img src={banner} className="w-full relative z-10 h-full object-cover fade-in" alt="" />
                                <img src={wooz} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' alt="" />
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="w-full h-full relative bg-primary-blue">
                                <img src={banner} className="w-full relative z-10 h-full object-cover fade-in" alt="" />
                                <img src={wooz} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' alt="" />
                            </div>
                        </Slide>
                        <Slide index={2}>
                            <div className="w-full h-full relative bg-primary-blue">
                                <img src={banner} className="w-full relative z-10 h-full object-cover fade-in" alt="" />
                                <img src={wooz} className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' alt="" />
                            </div>
                        </Slide>
                    </Slider>
                    <DotGroup className=' bottom-4 absolute w-full flex items-center justify-center gap-2'>
                        <Dot slide={0} className='bg-white w-3 h-3 rounded-full' />
                        <Dot slide={1} className='bg-white w-3 h-3 rounded-full' />
                        <Dot slide={2} className='bg-white w-3 h-3 rounded-full' />
                    </DotGroup>
                </CarouselProvider>
            </section>
            <section className='bg-white py-20'>
                <div className="container-custom flex flex-col items-center gap-7">
                    <h1 className='text-primary-blue text-center text-xl lg:text-3xl font-bold'>Nikmati Internet Cepat dan Stabil di Rumah Bersama WOOZZ</h1>
                    <p className='lg:text-xl text-center text-sm'>Internet Fiber Optik terjangkau untuk semua <span className="font-bold">mulai dari Rp 100rb-an per bulan</span> dengan kecepatan hingga <span className="font-bold">250Mbps</span></p>
                    <div id="trigger1" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] gap-10">
                        <Scene triggerElement="#trigger1" offset={-100} duration={300} >
                            {(progress) => (
                                <Tween            
                                    to={{  y: '0', opacity: 1 }}     
                                    from={{ y: '200px', opacity: 0 }}  
                                    ease="Strong.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    <div className="rounded-xl bg-primary-blue p-4 flex flex-col items-center gap-2">
                                        <img src={i1} className='h-[100px] scale-150' alt="" />
                                        <p className='text-white mt-5 font-bold text-4xl'>100%</p>
                                        <p className="text-white text-xl font-bold">Fiber Optic</p>
                                    </div>
                                </Tween>    
                            )}
                        </Scene>
                        <Scene triggerElement="#trigger1" offset={-50} duration={500} >
                            {(progress) => (
                                <Tween            
                                    to={{  y: '0', opacity: 1 }}     
                                    from={{ y: '200px', opacity: 0 }}  
                                    ease="Strong.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                     <div className="rounded-xl bg-primary-orange p-4 flex flex-col items-center gap-2">
                            <img src={i3} className='h-[100px] scale-150' alt="" />
                            <p className='text-primary-blue mt-5 font-bold text-4xl'>Unlimited</p>
                            <p className="text-primary-blue text-xl font-medium">Tanpa Kuota</p>
                        </div>
                                </Tween>    
                            )}
                        </Scene>
                        <Scene triggerElement="#trigger1" offset={-100} duration={600} >
                            {(progress) => (
                                <Tween            
                                    to={{  y: '0', opacity: 1 }}     
                                    from={{ y: '200px', opacity: 0 }}  
                                    ease="Strong.easeOut"
                                    totalProgress={progress}
                                    paused
                                >
                                    <div className="rounded-xl bg-primary-blue p-4 flex flex-col items-center">
                            <img src={i2} className='h-[100px] scale-150' alt="" />
                            <p className='text-white mt-5 font-bold text-4xl'>Gratis</p>
                            <p className="text-white text-xl font-bold">Biaya Pemasangan</p>
                        </div>
                                </Tween>    
                            )}
                        </Scene>
                    </div>
                </div>
            </section>
            <section className='bg-base py-20 flex flex-col items-center gap-5'>
                <h1 className='text-primary-blue text-center text-xl lg:text-3xl font-bold'>Pilihan Paket Internet WOOZZ</h1>
                <div className="flex items-center gap-2">
                    <button className={`px-5 py-1 rounded text-xl ${paket === "home" ? "text-primary-blue bg-blue-300" : "bg-gray-300 text-gray-400"} font-bold`} onClick={() => setPaket("home")}>Wooz Home</button>
                    <button className={`px-5 py-1 rounded text-xl ${paket === "wifi" ? "text-primary-blue bg-blue-300" : "bg-gray-300 text-gray-400"} font-bold`} onClick={() => setPaket("wifi")}>Wooz Wifi</button>
                </div>
                {paket === "home" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[80%] gap-10 mt-10">
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket <span className="text-primary-orange">NEWBIE</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Up to <span className='font-bold'> 10</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>135k</p>
                                    <p className='text-primary-blue text-sm'>Perbulan</p>
                                </div>
                            </div>
                            <p>Internet Unlimeted</p>
                            <p>Free Instalasi</p>
                            <p>Idel Hingga 3 device</p>
                            <button className='group-hover:-rotate-6 transform duration-100 bg-primary-blue rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket <span className="text-green-400">ROOKIE</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Up to  <span className='font-bold'> 15</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>165k</p>
                                    <p className='text-primary-blue text-sm'>Perbulan</p>
                                </div>
                            </div>
                            <p>Internet Unlimeted</p>
                            <p>Free Instalasi</p>
                            <p>Idel Hingga 3 device</p>
                            <button className='bg-primary-blue group-hover:-rotate-6 transform duration-100 rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3 relative">
                        <img src={bestseller} className='absolute -top-4 -right-4' alt="" />
                            <p className='text-primary-blue text-3xl font-bold'>Paket <span className="text-pink-500">PRO</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Up to  <span className='font-bold'> 30</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>210k</p>
                                    <p className='text-primary-blue text-sm'>Perbulan</p>
                                </div>
                            </div>
                            <p>Internet Unlimeted</p>
                            <p>Free Instalasi</p>
                            <p>Idel Hingga 5 device</p>
                            <button className='bg-primary-blue group-hover:-rotate-6 transform duration-100 rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3 relative">
                            <img src={recommended} className='absolute -top-4 -right-4' alt="" />
                            <p className='text-primary-blue text-3xl font-bold'>Paket <span className="text-blue-600">ELITE</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Up to  <span className='font-bold'>50</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>255k</p>
                                    <p className='text-primary-blue text-sm'>Perbulan</p>
                                </div>
                            </div>
                            <p>Internet Unlimeted</p>
                            <p>Free Instalasi</p>
                            <p>Idel Hingga 3 device</p>
                            <button className='bg-primary-blue group-hover:-rotate-6 transform duration-100 rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket <span className="text-purple-600">HEROIC</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Up to  <span className='font-bold'> 100</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>350k</p>
                                    <p className='text-primary-blue text-sm'>Perbulan</p>
                                </div>
                            </div>
                            <p>Internet Unlimeted</p>
                            <p>Free Instalasi</p>
                            <p>Idel Hingga 3 device</p>
                            <button className='bg-primary-blue group-hover:-rotate-6 transform duration-100 rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket <span className="text-red-500">LEGEND</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Up to  <span className='font-bold'> 250</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>600k</p>
                                    <p className='text-primary-blue text-sm'>Perbulan</p>
                                </div>
                            </div>
                            <p>Internet Unlimeted</p>
                            <p>Free Instalasi</p>
                            <p>Idel Hingga 5 device</p>
                            <button className='bg-primary-blue group-hover:-rotate-6 transform duration-100 rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="w-full flex justify-end col-span-1 md:col-span-2 xl:col-span-3">
                            <p>*Harga belum termasuk ppn</p>
                        </div>
                </div>
                )}
                {paket === "wifi" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[80%] gap-10 mt-10">
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket Unlimited <span className="text-primary-orange">Harian</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Speed up to <span className='font-bold'> 50</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>3000</p>
                                    <p className='text-primary-blue text-sm'>Masa Berlaku 2 jam</p>
                                </div>
                            </div>
                            <button className='group-hover:-rotate-6 transform duration-100 bg-primary-blue rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket Unlimited <span className="text-primary-orange">Harian</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Speed up to <span className='font-bold'> 50</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>5000</p>
                                    <p className='text-primary-blue text-sm'>Masa Berlaku 8 jam</p>
                                </div>
                            </div>
                            <button className='group-hover:-rotate-6 transform duration-100 bg-primary-blue rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket Unlimited <span className="text-primary-orange">Harian</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Speed up to <span className='font-bold'> 50</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>10.000</p>
                                    <p className='text-primary-blue text-sm'>Masa Berlaku 24 jam</p>
                                </div>
                            </div>
                            <button className='group-hover:-rotate-6 transform duration-100 bg-primary-blue rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket Unlimited <span className="text-purple-500">Mingguan</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Speed up to <span className='font-bold'> 50</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>30.000</p>
                                    <p className='text-primary-blue text-sm'>Masa Berlaku 7 hari</p>
                                </div>
                            </div>
                            <button className='group-hover:-rotate-6 transform duration-100 bg-primary-blue rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket Unlimited <span className="text-yellow-700">Bulanan</span></p>
                            <p className='text-primary-blue text-2xl font-medium'>Speed up to <span className='font-bold'> 50</span> mbps</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>75.000</p>
                                    <p className='text-primary-blue text-sm'>Masa Berlaku 30 hari</p>
                                </div>
                            </div>
                            <button className='group-hover:-rotate-6 transform duration-100 bg-primary-blue rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>
                        <div className="stagger bg-white p-4 rounded-xl group hover:scale-110 duration-100 hover:rotate-3">
                            <p className='text-primary-blue text-3xl font-bold'>Paket Unlimited</p>
                            <p className="text-blue-600 text-center text-xl w-full">Speed Booster</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>5000</p>
                                </div>
                            </div>
                            <p className="text-blue-800 text-center text-xl w-full">Tambah Perangkat</p>
                            <div className="flex my-5">
                                <p className='text-primary-blue'>Rp</p>
                                <div className="flex flex-col">
                                    <p className='text-7xl font-bold text-primary-blue'>5000</p>
                                    <p className='text-primary-blue text-center text-sm'>Maksimal 3 Perangkat</p>
                                </div>
                            </div>
                            <button className='group-hover:-rotate-6 transform duration-100 bg-primary-blue rounded-lg w-full mt-5 py-3 text-white text-xl'>
                                Pilih Paket
                            </button>
                        </div>


                        <div className="w-full flex justify-end col-span-1 md:col-span-2 xl:col-span-3">
                            <p>*Harga belum termasuk ppn</p>
                        </div>
                </div>
                )}
                
            </section>
            <section className='bg-white py-20 flex flex-col gap-10'>
                <div className="bg-primary-blue rounded-3xl flex flex-col md:flex-row gap-5 container-custom">
                    <div className="w-full md:w-[250px] relative h-[130px] ">
                        <img src={laptop} className='absolute bottom-0 left-1/2 transform -translate-x-1/2' alt="" />
                    </div>
                    <div className="flex-1 flex justify-center flex-col px-4 py-5 md:py-0">
                        <p className='text-white font-bold text-xl md:text-3xl'>Dapatkan Diskon Tambahan Hingga 20%</p>
                        <p className="text-white md:text-lg">dengan komitmen berlangganan min 6-12 bulan</p>
                    </div>
                </div>
                <div className="container-custom">
                    <button onClick={onClickDropdownSurvei} className='bg-primary-blue p-3 rounded-2xl flex items-center text-white font-medium text-lg justify-between w-full'>    
                        Ketersediaan Jaringan Kami Saat Ini
                        <img src={up} alt="" />
                    </button>
                    {openSurvei && (
                        <div className="bg-base p-5 flex flex-col gap-5 w-full rounded-lg">
                            <div className="w-full flex items-center justify-between">
                                <p className="font-bold">Griya Alam Sentosa (Cileungsi, Bogor)</p>
                                <a target='_blank' href="https://maps.app.goo.gl/jWArMWeS5ZEZfYcB7" className='bg-yellow-500 whitespace-nowrap font-light px-4 py-1 rounded-full'>
                                    Cek Lokasi
                                </a>
                            </div>
                            <div className="w-full flex items-center justify-between">
                                <p className="font-bold">Kranji (Bekasi, Jawa Barat)</p>
                                <a target='_blank' href="https://maps.app.goo.gl/7NQSJExHqwQvNe8s9" className='bg-yellow-500 whitespace-nowrap font-light px-4 py-1 rounded-full'>
                                    Cek Lokasi
                                </a>
                            </div>
                            <div className="flex flex-col mt-5 gap-3 w-full items-center">
                                <p className="font-bold text-xl">Ingin kami hadir diwilayahmu?</p>
                                <button className='w-fit bg-primary-blue rounded-xl py-2 px-7 text-white'>
                                Ajukan Survei
                            </button>
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <section className='bg-base'>
                <div className="container-custom flex">
                    <div className="flex-1 flex flex-col gap-1 justify-center py-10">
                        <p className='text-primary-blue font-semibold text-2xl'>Informasi lebih lanjut?</p>
                        <p className="font-light text-lg">Terhubung dan ikuti kami di</p>
                        <div className="flex items-center gap-3">
                            <button className='w-10 h-10'>
                                <img src={fb} alt="" />
                            </button>
                            <button className='w-10 h-10'>
                                <img src={ig} alt="" />
                            </button>
                            <button className='text-primary-blue flex gap-2 items-center'>
                                <img src={mail} alt="" />
                                cs@woozz.id
                            </button>
                        </div>
                    </div>
                    <div className="flex-2 hidden sm:flex">
                        <img src={cs} className='h-[250px] object-cover' alt="" />
                    </div>
                </div>
            </section>
            <section className='bg-primary-blue py-10'>
                <div className="container-custom flex justify-between gap-10">
                    <div className="flex gap-4 flex-wrap">
                        <img src={wooz} alt="" />
                        <img src={intetic} alt="" />
                        <div className="flex flex-col">
                            <p className="font-semibold text-white">PT Inovasi Aliansi Global</p>
                            <p className='text-white text-sm'>Jl. Pulau Bali Raya No. 7 G, RT 004/RW010, Perumnas 3, Aren Jaya, Bekasi Timur, Bekasi, 17111</p>
                        </div>
                    </div>
                    <button className='bg-green-500 text-white h-fit rounded-full w-auto px-5 py-2 flex font-semibold items-center gap-1'>
                        <img src={wa} className='h-[30px] lg:inline-block hidden' alt="" />
                        <p>Whatsapp</p>
                    </button>
                </div>
                <p className="text-white text-sm font-light text-center mt-10">Copyright © 2024 by PT Aliansi Inovasi Global x PT Indo Teknologi Logistik</p>
            </section>
        </Controller>
    )
}
