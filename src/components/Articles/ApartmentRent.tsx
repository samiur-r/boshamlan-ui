import Link from 'next/link'
import React from 'react'

const ApartmentRent = () => {
  return (
    <div className="bg-primary py-10">
      <div className="container max-w-6xl px-5">
        <div className="dir-rtl mb-3 text-white text-2xl font-semibold">
          شقق للايجار في الكويت
        </div>
        <div className="text-white text-sm md:text-lg dir-rtl">
          <div>
            من خلال بو شملان يمكنك البحث في آلاف الشقق والعقارات المعروضه{' '}
            <Link href="/للايجار">
              <a className="underline underline-offset-4">للايجار</a>
            </Link>{' '}
            او{' '}
            <Link href="/للبيع">
              <a className="underline underline-offset-4">للبيع</a>
            </Link>{' '}
            او{' '}
            <Link href="للبدل">
              <a className="underline underline-offset-4">للبدل</a>
            </Link>{' '}
            في الكويت من الملاك مباشره او من خلال{' '}
            <Link href="المكاتب">
              <a className="underline underline-offset-4">المكاتب العقارية</a>
            </Link>{' '}
            . باستخدام محرك البحث المبسط تستطيع تحديد البيانات التالية:
          </div>
          <ul className="list-disc my-5 mx-5 grid gap-3">
            <li>
              الغرض من الإعلان:{' '}
              <Link href="/للبيع">
                <a className="underline underline-offset-4">للبيع</a>
              </Link>{' '}
              او{' '}
              <Link href="/للايجار">
                <a className="underline underline-offset-4">للايجار</a>
              </Link>{' '}
              او{' '}
              <Link href="للبدل">
                <a className="underline underline-offset-4">للبدل</a>
              </Link>{' '}
            </li>
            <li>
              نوع العقار: مثل شقق، بيوت، فلل، ادوار، أراضي، عمارات، محلات
              تجاريه، مكاتب، مزارع، شاليهات، .. الخ
            </li>
            <li>
              المنطقة: ويمكنك تحديد أي منطقة من مناطق الكويت من خلال كتابة أو
              اختيار اسم المنطقه مثل سلوى، السالمية، مبارك الكبير، الجابرية،
              حولي، المنقف، سعد العبدالله، صباح السالم، جابر الأحمد، صباح
              الأحمد، الخيران، ابوفطيرة، الفنيطيس، الرميثيه، المسايل، وغيرها من
              مناطق الكويت.
            </li>
          </ul>
          <div>
            وبعد تحديد خيارات البحث ستجد أكبر عدد ممكن من الإعلانات العقارية
            وستتمكن من الوصول إلى أكبر عدد ممكن من الإعلانات المرتبطة بطلبك.
            وعندها يمكنك التواصل مع صاحب الإعلان بشكل مباشر عن طريق الاتصال او
            خلال الواتس اب حسب اختيارك، وهنا ينتهي دور بو شملان العقاري حسب
            شروطه حيث انه لا يتدخل بين الأطراف المعنية في تفاصيل الصفقات
            العقارية.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApartmentRent
