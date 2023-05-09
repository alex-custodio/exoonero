import Image from "next/image";
import cc from "@/assets/images/creative-commons.png";

export default function Footer(){
    return (
        <footer className="flex text-xs text-[#6C6C6C] gap-x-5 items-center ">
          <Image src={cc} alt={""} className="w-24"></Image>
          <p>
            Dados públicos extraídos de diários oficiais municipais da
            Associação dos Municípios Alagoanos (AMA). Todo o conteúdo do site
            está disponível sob a licença Creative Commons Atribuição 4.0
            Internacional, o que significa que pode ser compartilhado e
            reutilizado para trabalhos derivados, desde que citada a fonte.
          </p>
        </footer>
    )
}