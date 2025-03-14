import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const CustomAccordion = () => {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto px-6  max-w-[1200px] ">
        <div className="w-full py-12">
          <Accordion
            className="border border-zinc-300 bg-white rounded-lg p-4"
            elevation={0}
          >
            {/* Header */}
            <AccordionSummary
              expandIcon={<ChevronDown />}
              className="bg-white hover:bg-gray-200 transition-all duration-300 px-4 py-2 rounded-sm"
            >
              <Typography className="!font-medium !text-[20px]">
                Testler Hakkında
              </Typography>
            </AccordionSummary>

            {/* İçerik */}
            <AccordionDetails className="px-4 py-2">
              <Typography className="!text-sm">
                <div className="flex flex-col gap-12">
                  <div>
                    Techcareer.net üzerinde sunulan testler, teknoloji alanına
                    ilgisi olan kişilerin bilgi, beceri ve deneyimlerini ölçmeye
                    yönelik tasarlanır. Bu testler, adayların çeşitli teknik ve
                    analitik becerilerini değerlendirmek için kullanılır ve aynı
                    zamanda iş başvurularında adayları bir adım öne çıkartmak
                    için sınav sonucu öz geçmişlerine eklenir.
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[16px] font-semibold">
                      Testler Hangi Konuları Kapsar?
                    </h3>
                    <div>
                      Testler; yazılım geliştirme, veri analitiği, siber
                      güvenlik, yapay zeka, bulut teknolojileri ve ürün yönetimi
                      gibi teknoloji alanlarındaki temel ve ileri düzey konuları
                      kapsar. Amaç, katılımcıların teknik bilgi ve becerilerinin
                      detaylı bir şekilde değerlendirilmesidir.
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[16px] font-semibold">
                      Testlerin Zorluk Seviyeleri Nedir?
                    </h3>
                    <div>
                      Testler başlangıç, orta ve ileri düzey olmak üzere üç
                      farklı seviyede sunulur. Her seviyedeki test, katılımcının
                      bilgi ve deneyim düzeyine uygun şekilde tasarlanır.
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[16px] font-semibold">
                      Bir Testi Tamamlamak Ne Kadar Sürer?
                    </h3>
                    <div>
                      Her test içerisinde o teste ait soru sayısı ve süre
                      bilgisi verilmektedir. Testler 10 ile 60 dakika arasında
                      değişen, soru tipi ve test türüne göre farklılaşan
                      sürelere sahiplerdir. Testler sayfasından, ilgili test ile
                      ilgili süre bilgisi detaylarına ulaşabilirsiniz.
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[16px] font-semibold">
                      Testlere Nasıl Katılabilirim?
                    </h3>
                    <div>
                      Testlere katılım sağlamak için tek şartımız Giriş Yap/Üye
                      Ol butonuna tıklayarak hesabınıza giriş yapmanız ya da
                      yeni bir hesap oluşturmanız gerekmektedir.
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-[16px] font-semibold">
                      Testlerin Tamamı Ücretsiz mi?
                    </h3>
                    <div>
                      Sayfamızda yer alan tüm testlere hesabınız ile giriş
                      yaptıktan yada üye olduktan sonra ücretsiz şekilde katılım
                      sağlayabilirsiniz.
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default CustomAccordion;
