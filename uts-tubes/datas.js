
const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida, orci nec feugiat commodo, ipsum orci consequat nulla, non sodales sem lorem et ante. Etiam dignissim tempor elit, nec feugiat ante suscipit eget. Sed imperdiet diam at ultrices viverra. Duis malesuada mattis tortor, ac ultrices elit euismod a.\n\nSuspendisse tincidunt eleifend volutpat. Phasellus vehicula sapien eu aliquam dignissim. Duis diam lorem, porta id nisi a, interdum rutrum quam. Suspendisse tincidunt euismod nunc. Etiam interdum, sem tincidunt sodales dignissim, orci ligula hendrerit dolor, ac suscipit neque eros sit amet magna. Sed gravida porttitor justo in venenatis. Maecenas dolor odio, semper eu velit pharetra, euismod placerat lectus. Curabitur nec aliquam mi. Aliquam suscipit iaculis vestibulum.";

const datas = [
    {
        id: 1,
        title:
          "Kebiasaan Picu Penuaan Dini, Terlihat Lebih Tua dari Usia Sebenarnya",
        image:
          "https://akcdn.detik.net.id/visual/2019/02/18/1d5f8d54-7b7d-4c0b-a219-f337f21a6aa5_169.jpeg?w=650&q=80",
        date: "Sabtu, 28 September 2024", // Tambahkan tanggal
          content: content,
      },
      {
        id: 2,
        title: "Viral Ibu Muda Tetiba Melahirkan Tanpa Hamil, Ini Kata Dokter",
        image:
          "https://akcdn.detik.net.id/visual/2023/01/31/ilustrasi-tangan-bayi-dan-orang-tua_169.jpeg?w=650&q=80",
          date: "Jumat, 27 September 2024", // Tambahkan tanggal
          content: content,
      },
      {
        id: 3,
        title:
          "7 Kebiasaan Sederhana yang Membuat Awet Muda, Kurangi Asupan Gula",
        image:
          "https://akcdn.detik.net.id/visual/2022/05/18/ilustrasi-perempuan-minum-air-mineral_169.jpeg?w=650&q=80",
          date: "Kamis, 08 Oktober 2024", // Tambahkan tanggal
          content: content,
      },
      {
        id: 4,
        title: "Fenomena Bunuh Diri Mahasiswa Jadi Potret Kerentanan Mental Gen Z",
        image:
          "https://akcdn.detik.net.id/visual/2019/12/07/454933bf-8d88-42a3-820f-a22def7b7e0c_169.jpeg?w=650&q=80",
          date: "Kamis, 10 Oktober 2024", // Tambahkan tanggal
          content: content,
      },
      {
        id: 5,
        title:
          "3 Langkah yang Harus Dilakukan saat Didiagnosis Kanker",
        image:
          "https://akcdn.detik.net.id/visual/2017/07/04/44649085-089a-44f5-b68f-8097bc647882_169.jpg?w=650&q=80",
          date: "Selasa, 15 Oktober 2024", // Tambahkan tanggal
          content: content,
      },
      {
        id: 6,
        title:
          "5 Kebiasaan Ini Bisa Bikin Anak Muda Usia 20-an Kena Diabetes",
        image:
          "https://akcdn.detik.net.id/visual/2019/07/23/01fa8d29-1334-4616-bc0e-7786872d59a5_169.jpeg?w=650&q=80",
          date: "Kamis, 17 Oktober 2024", // Tambahkan tanggal
          content: content,
      },
      {
        id: 7,
        title: "Kaya Khasiat, Apa Manfaat Daun Kelor untuk Ibu Hamil?",
        image:
          "https://akcdn.detik.net.id/visual/2022/08/09/ilustrasi-daun-kelor-1_169.jpeg?w=650&q=80",
          date: "Kamis, 17 Oktober 2024", // Tambahkan tanggal
          content: content,
      },
      {
        id: 8,
        title:
          "Warga RI Bisa Medical Check Up Gratis 2025 Nanti, Ini Caranya",
        image:
          "https://akcdn.detik.net.id/visual/2023/05/24/ilustrasi-konsultasi-dengan-dokter_169.jpeg?w=650&q=80",
          date: "Selasa, 05 Juni 2024", // Tambahkan tanggal
          content: content,
      },
      {
        id: 9,
        title: "Kenali Langkah CPR, Pertolongan Pertama Kasus Henti Jantung",
        image:
          "https://akcdn.detik.net.id/visual/2020/05/05/f8649cbd-7ca3-43ed-8249-d7ded84859ec_169.jpeg?w=650&q=80",
          date: "Selasa, 05 Mei 2024",
      },
      {
        id: 10,
        title:
          "Terungkap Kebiasaan yang Bikin Orang Asia Rentan Kena Diabetes Meski Tak Obesitas",
        image:
          "https://akcdn.detik.net.id/community/media/visual/2018/10/26/94ce9c58-d4eb-48dc-a12d-5c515374de8a_169.jpeg?w=700&q=90",
          date: "Kamis, 14 Nov 2024",
          content: content,
      },
      {
        id: 11,
        title:
          "5 Makanan untuk Penderita Maag, Ampuh Enggak Bikin Sakit Perut",
        image:
          "https://akcdn.detik.net.id/visual/2022/08/12/ilustrasi-sakit-perut_169.jpeg?w=650&q=80",
          date: "Selasa, 12 Nov 2024",
          content: content,
      },
      {
        id: 20,
        title: 'Makan Lebih Banyak Sayur',
        description: 'Tambahkan sayuran hijau seperti bayam, brokoli, dan kale ke dalam menu harian Anda.',
        image: 'https://a-cdn.sindonews.net/dyn/732/content/2014/11/16/152/924809/pentingnya-sayur-dan-buah-5eO-thumb.jpg',
        date: "Selasa, 12 Nov 2024",
          content: content,
      },
      {
        id: 21,
        title: 'Hindari Gula Berlebih',
        description: 'Kurangi konsumsi makanan manis seperti kue, soda, dan permen.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT13mElGAuSOiHsuP1sVNonY_B9vlLfmxCC9sGaBgvSgzancMTrbJEW4KeUDo-vwRiALVo&usqp=CAU',
        date: "Selasa, 12 Nov 2024",
          content: content,
      },
      {
        id: 22,
        title: 'Perbanyak Minum Air',
        description: 'Minumlah minimal 8 gelas air setiap hari untuk menjaga hidrasi.',
        image: 'https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//90/MTA-4013882/gordon-s_gordon-s_dry_750_ml_-750_ml-_full02.jpg',
        date: "Selasa, 12 Nov 2024",
          content: content,
      },
];

export default datas;