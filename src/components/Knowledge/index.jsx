import React, { useRef, useEffect, useState } from 'react';
import CardRive from './CardRive';

const Knowledge = () => {
  const riveRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = riveRef.current.getBoundingClientRect().top;
      setIsActive(offset === 222);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <div className="relative mt-[50px] pb-[247px]">
      <div className="container-wide relative grid grid-cols-[264px_1fr] gap-x-[181px]">
        <div className="text-22 relative pr-[180px] pl-3 leading-snug tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius perferendis, alias nostrum reiciendis expedita
          mollitia quod dicta, similique tempore repudiandae id est laborum ex facilis! Magni obcaecati fuga labore
          sapiente voluptatum. Quo, corporis nulla, doloribus saepe odit tempora in nihil illo repellendus ad obcaecati
          modi. Ea, tempore quibusdam enim ratione minima deserunt ex ducimus repellendus sed itaque autem dolor id
          fugiat quisquam earum est quia odit adipisci aliquid optio maiores eligendi nobis. Repellendus alias facilis
          ullam enim a, eveniet doloribus reiciendis aliquid harum aspernatur praesentium dolores magni quia
          voluptatibus reprehenderit exercitationem. Ipsum officiis repudiandae unde inventore reprehenderit, adipisci
          nihil amet sit dolore soluta eius ad doloremque voluptate natus. Quo facere excepturi in rem. Ut mollitia
          deleniti iusto nihil, officia adipisci fugit laudantium cum reiciendis at in quisquam distinctio odit sed
          nesciunt eos vero et nemo labore deserunt, qui porro! Libero suscipit commodi dolores nisi ratione dolore a
          asperiores error doloribus. Fugit, temporibus ipsam modi iure adipisci consectetur porro enim dicta! Ipsa
          perferendis commodi eaque expedita est quo quidem sed officiis esse dolorum vitae voluptas ad voluptatem
          sapiente perspiciatis blanditiis vel, laboriosam sit. Animi architecto eius facere minus. Provident, eligendi?
          Optio molestiae rerum ut dolorum corrupti nesciunt totam ab itaque odit voluptas? Non sunt ipsa omnis ratione,
          autem laudantium, commodi debitis praesentium corporis illum molestias alias eligendi eos nemo, veniam placeat
          blanditiis similique vero vitae. Animi, quidem deserunt! Excepturi nesciunt possimus expedita, nisi velit
          minus ducimus ratione laborum vitae, omnis beatae facere? Officia in laudantium reprehenderit minima fugit ad
          vel laboriosam alias, culpa omnis nesciunt rem maxime nobis cumque ducimus hic sapiente id. Ea fugit dolorem
          eligendi, error nemo praesentium exercitationem iure reprehenderit aut deleniti laborum officiis debitis
          quidem incidunt commodi obcaecati? Dolore illo quas facilis veritatis iure quia nostrum modi, aliquid tempore
          esse consectetur neque velit. Est repellat exercitationem eaque libero voluptatibus, consequuntur, debitis,
          adipisci ex veritatis porro totam velit quas tenetur. Ex voluptatibus enim quae accusamus libero sapiente
          nobis quidem. Deleniti, minima! Veritatis suscipit cupiditate omnis natus tenetur distinctio, non aliquid fuga
          unde aut quaerat minus maxime vero, ea voluptatem harum, dolorum dolor illum eum ipsam explicabo? Non ad
          doloribus totam facilis alias. Dignissimos, ullam quibusdam quos itaque, enim dicta earum cum, ipsa ipsam
          consectetur atque fuga minus. Dolorum nemo ducimus, amet obcaecati in voluptatibus quam? Voluptatum quaerat
          aperiam amet reiciendis dolor odit, laborum est sit aspernatur? Cum a sit aspernatur deserunt, ut illum beatae
          hic quod saepe, minus obcaecati rerum numquam debitis corrupti quaerat. Distinctio, quidem ratione. Voluptate,
          atque excepturi cum quibusdam non quasi, sapiente suscipit aperiam repellendus minus modi placeat. Delectus
          itaque recusandae explicabo dolorem voluptatum provident omnis soluta non eaque! Suscipit vero officia magnam.
          Doloribus saepe similique eum laboriosam tempora quam ratione eos nihil distinctio, nam et veritatis assumenda
          obcaecati fugit eveniet tenetur maiores fuga quis aut, quaerat sapiente dolorem impedit quas modi! Nostrum
          praesentium voluptatibus architecto iusto et laudantium quos, ea unde aliquid sint eligendi alias porro
          voluptatem quae, deleniti dicta molestiae accusantium placeat totam nam tempore corrupti fugiat quas officiis!
          Optio excepturi, officiis placeat similique laudantium odio quam nostrum voluptas natus ea atque voluptates
          in, quasi amet dolore. Rem consequuntur cum eligendi sint quibusdam sunt, officia omnis qui illum adipisci
          nesciunt quaerat. Autem quos beatae vero tenetur quis rerum inventore nihil perspiciatis, veniam quidem
          eveniet aliquam recusandae mollitia voluptate magnam expedita temporibus eum, dolores ipsam officiis dolore
          ratione ut! Quod saepe eius repellat cumque, at debitis vero atque mollitia ad quam hic tempora, explicabo
          corrupti assumenda dicta architecto, nulla numquam eligendi eveniet. Ducimus ut officia sint repellat
          molestiae nisi maxime veritatis provident itaque quaerat quasi necessitatibus pariatur, facere vitae dolorem
          dolor amet deleniti magnam at, iure accusamus similique exercitationem dolore qui. Laboriosam rerum ipsam
          dolorem alias pariatur nam numquam tempore repellat et ab, perspiciatis odio. Sapiente architecto nulla
          quaerat praesentium suscipit quos magnam iusto harum molestias, velit, aut rem officiis! Tempore, itaque magni
          a excepturi laudantium ducimus, suscipit sint dicta delectus autem, dolorum ex facilis aliquam animi quisquam
          eius quis molestiae reiciendis doloremque maxime iure numquam quasi? Distinctio facilis ducimus similique non.
          Accusamus, id. Delectus nesciunt fugiat consequatur blanditiis dolorem corrupti nihil alias saepe, modi vitae
          officiis eaque odit, eius nostrum laudantium voluptatibus! Nobis veniam est ea, quidem culpa repellat cumque
          corrupti alias id quasi porro omnis similique, eligendi placeat aliquam obcaecati aut repudiandae natus optio
          nulla beatae, eveniet tempora minus. Temporibus officiis fugiat deleniti inventore excepturi adipisci maiores
          corrupti consequuntur tempore, provident impedit pariatur, qui delectus ex doloremque blanditiis totam quaerat
          ducimus tempora nisi voluptas iusto iure, rem dolore! Sunt voluptatem maiores non assumenda. Cupiditate ullam
          earum eius commodi alias delectus, qui ipsum omnis sequi architecto aliquam, dolor distinctio sapiente
          voluptatum magnam facilis! Dolorum, exercitationem? Rerum culpa obcaecati, dolor temporibus ipsum dicta enim
          impedit earum iusto quos illum eius quod et sit quia totam provident ullam eaque quaerat exercitationem
          numquam neque optio. Maxime atque omnis, ducimus magnam excepturi, ratione qui nostrum expedita minima
          officiis numquam voluptates voluptate rerum quis in commodi fuga, error quia tempora. Quas blanditiis, vitae
          explicabo odit error cumque repellat quia esse exercitationem repudiandae dolorem voluptatum? Amet voluptatum
          tenetur libero aperiam facere ab at consequuntur autem ex quisquam. Voluptate optio ipsa fuga possimus
          molestiae obcaecati, dolore at eius nemo. Numquam perferendis aspernatur asperiores minima reprehenderit
          consectetur sit odit deleniti dolorum! Quibusdam dolor veniam aliquam rerum, iusto inventore minima animi, in
          fuga eaque illo, architecto repellendus adipisci! Officiis, debitis quam sunt illo magni eveniet ratione culpa
          perspiciatis esse repudiandae veniam possimus dignissimos similique accusamus iste voluptas distinctio
          laboriosam natus, ex iusto. Eos ut quidem doloribus sint praesentium error dolor rerum enim quibusdam
          explicabo laborum, quia at maiores nisi perferendis dolores tempore laboriosam perspiciatis qui delectus quasi
          id rem iste fuga? Aperiam in iusto rem veniam quasi. Similique ipsum perferendis culpa nisi quae, suscipit
          commodi ducimus expedita, fuga dolorem cupiditate distinctio cum voluptates? Explicabo asperiores eius
          quibusdam soluta totam dolore. Fuga ad magnam porro aspernatur deleniti eum. Consectetur blanditiis
          praesentium rem fuga dolores non, debitis, iusto consequuntur qui reiciendis deserunt sunt! At, nobis magnam
          corporis molestias eaque sapiente quaerat placeat harum tempore facere voluptatum repellendus dicta eum
          dolores. Accusantium illum blanditiis doloremque est sapiente? Cum ea minus doloremque, temporibus vel modi id
          vitae odit dolores, qui incidunt numquam error facilis dicta dolor fugiat itaque quis natus nihil quia commodi
          quam dolore officia! Perspiciatis facere, a magni in recusandae maxime tempora, dolores sint id soluta dolor
          autem explicabo molestiae facilis iste atque amet expedita animi cum doloribus, suscipit accusantium vero
          incidunt neque. Voluptate harum earum quod corporis nam eaque omnis doloribus enim fuga iure eius suscipit
          mollitia architecto assumenda, pariatur iusto vitae voluptas inventore natus cupiditate distinctio quos
          tenetur. Sit reprehenderit in corporis iure quia tempore harum temporibus veniam porro qui. Esse, velit!
          Veritatis consequuntur unde et totam a quisquam hic, asperiores deserunt dolore vel, ad vitae eos! Illum
          inventore tempora corporis possimus facere sit culpa cupiditate doloribus sequi, velit praesentium totam
          nostrum dolores. Veritatis excepturi harum hic corrupti dignissimos quod, blanditiis eos vel deserunt
          quisquam, odio cumque quia dicta vitae quaerat optio modi quidem temporibus! Hic distinctio facilis
          accusantium consequatur at sed sint similique, beatae mollitia excepturi illo cum assumenda eaque, obcaecati
          magni esse iste perferendis ut quibusdam atque soluta! Natus consequatur odit, dolorum qui, accusantium
          praesentium adipisci, provident libero sint accusamus repellendus doloribus doloremque alias voluptatem? Magni
          aperiam neque id nulla. Modi, debitis ratione? Suscipit, voluptates quas asperiores fugit officiis nostrum
          atque provident itaque explicabo! Officia vel ea itaque eum labore eaque suscipit vitae sint, illo eos
          officiis temporibus mollitia laudantium consequuntur voluptatem similique placeat iusto, quia nulla sed
          laboriosam saepe repellat atque voluptate. In aut cum iste tenetur earum blanditiis, atque voluptatem natus
          quis sed voluptate vitae eum aliquam nisi perspiciatis. Reiciendis omnis quidem nesciunt debitis. Labore
          dolorum unde possimus error magnam eius, sunt molestias placeat et quisquam accusamus voluptatibus, magni in
          ratione! Voluptates, mollitia commodi? Excepturi, delectus earum quis nulla neque nostrum odit, modi
          consequatur deserunt veritatis ad nam ut aspernatur magnam numquam. Nisi quidem vel repellat, repudiandae
          accusamus nesciunt fugit ad magni libero blanditiis optio amet debitis modi quo nulla at assumenda quas sunt
          natus reprehenderit. Porro provident odit reiciendis, ratione quisquam totam, necessitatibus culpa
          reprehenderit commodi laudantium fugit animi est iste cupiditate praesentium ipsam natus cumque nihil
          temporibus. Autem, hic perferendis! A explicabo omnis doloribus. Vitae consequuntur, cumque aliquam rem illum
          ducimus voluptas autem omnis, adipisci rerum facilis illo odio quo ea quae, neque qui. Laborum illum tempora
          eos, reprehenderit consectetur architecto eaque ducimus. Tempore, non! Culpa harum vero quae, perferendis
          quisquam suscipit quos mollitia eaque natus, deserunt, illum ut ipsum. Totam iure deleniti at! Mollitia unde
          ipsum doloribus qui possimus veritatis eligendi at itaque quas voluptatum, labore libero magnam officia,
          asperiores, eaque sed expedita! Velit blanditiis porro ipsam cupiditate ratione! Quisquam totam necessitatibus
          recusandae quis, odio itaque rerum culpa quidem dolores harum, nemo quos, ut possimus quia vero perferendis
          saepe! Consequatur aperiam corporis quam, explicabo commodi nulla, quas voluptatum possimus laboriosam facere
          laudantium quasi consequuntur, voluptate eum veniam ex voluptas maiores nobis. Maxime tenetur explicabo
          deserunt voluptate quisquam? Cupiditate praesentium consectetur perferendis ducimus voluptatem quam, rem
          soluta repudiandae tempore exercitationem incidunt est, eligendi voluptatum odit sunt laboriosam adipisci,
          recusandae corrupti. Pariatur eveniet sint facere, accusamus, ex eius quas praesentium, cupiditate laborum
          necessitatibus nesciunt quisquam blanditiis porro mollitia facilis dicta nobis officiis assumenda minus!
          Recusandae quas reiciendis consequatur reprehenderit corporis odio doloribus animi porro accusamus
          exercitationem, sunt sit nemo hic facere vitae fugiat dicta commodi earum repellat aperiam. Iusto reiciendis
          magnam obcaecati alias quia reprehenderit porro, sit, ea et, blanditiis adipisci voluptatum aut voluptate
          fugit voluptas eligendi voluptatem labore quae consequuntur inventore. Laboriosam minima dolore repellat
          suscipit, tempora eum corporis totam? Nihil temporibus quasi corrupti necessitatibus consequatur assumenda
          eligendi laboriosam fugit nulla, soluta sunt cum ipsum sed ratione, aliquid natus? Quos recusandae, atque
          aliquam ratione veniam ipsum minima nihil sunt? Laboriosam qui corrupti aliquam quisquam aut tempore, amet
          magnam omnis quam, est architecto animi reiciendis perferendis excepturi error soluta culpa rerum maiores
          voluptas placeat quibusdam consequatur delectus accusamus! Mollitia expedita commodi ipsam adipisci nesciunt,
          natus reprehenderit ad excepturi quod? Quidem itaque molestiae numquam amet! Quis libero eius vel numquam
          eaque tempora perspiciatis laborum similique necessitatibus. Reprehenderit dignissimos dolores, exercitationem
          accusamus impedit veniam, esse harum voluptas officia vero atque, necessitatibus optio temporibus iste tempore
          dolor sequi? Praesentium non repellendus incidunt? Dolores at reprehenderit temporibus rem voluptas excepturi
          odio quae assumenda iste autem id totam et explicabo quis esse, officia quibusdam ad necessitatibus unde vero
          molestiae quasi. Optio nihil earum veritatis et? Omnis accusantium quas est obcaecati quis tenetur aperiam
          dolore, quia amet, minus vitae, quibusdam non recusandae eaque suscipit nostrum numquam nam! Harum dolores,
          reprehenderit error sequi voluptate, distinctio molestiae iure reiciendis, corrupti laborum fugiat molestias
          soluta atque! Ipsa quia eum deleniti ut rem hic molestias cum, earum error doloremque ab, odit tempora minus,
          itaque mollitia rerum dolor perferendis voluptatum pariatur tenetur nostrum laboriosam? Quis minus nam
          explicabo, corporis alias quo ratione pariatur officia fugit inventore, voluptatibus veniam nisi quae cum
          assumenda. Quae fugiat repudiandae quis voluptates quisquam beatae! Incidunt fugiat voluptates qui facere quam
          vitae corrupti est dicta, ipsa voluptas obcaecati recusandae maiores aperiam officia quo illum voluptatibus.
          Voluptates ut ipsa cupiditate odit, quas repellat cum corrupti tenetur quos quo explicabo molestiae dolor
          ducimus maxime nostrum ex facere blanditiis distinctio excepturi in aliquam inventore possimus? Ducimus iste
          maiores quam illo aliquam, pariatur temporibus tempora ipsa sit dolorem sunt dolorum quasi omnis consequatur
          nihil fuga non quisquam animi perferendis fugit veritatis laborum aut repellendus accusantium. Unde
          dignissimos odit recusandae nam corrupti velit aperiam dolore consequuntur praesentium ipsum est sint adipisci
          non mollitia itaque ipsa quasi deserunt tempore placeat, odio fugiat aliquam accusamus amet similique. Vitae
          animi in accusantium doloribus dignissimos at enim aspernatur molestias earum tempore numquam, eius impedit
          modi provident aperiam aut illum distinctio explicabo omnis dolore harum sint, tenetur odit! Recusandae est
          ratione, at voluptate pariatur assumenda quo explicabo error esse nihil, similique corporis deleniti ad
          voluptatem fugit numquam delectus culpa optio! Est adipisci deleniti facere, eaque incidunt ad quos delectus
          quisquam unde, animi sunt suscipit repudiandae vero assumenda repellat ex laudantium mollitia ipsum dolores
          eligendi.
        </div>

        <div className="relative order-first ml-2 pt-[222px]">
          <div ref={riveRef} className="sticky top-[222px] z-10 h-[282px] w-64 rounded-xl">
            <div className="absolute bottom-[-52.5%] left-1/2 aspect-[.912] w-[178.125%] -translate-x-1/2">
              <div className="relative h-full w-full">
                <CardRive isActive={isActive} />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 pb-7">
              <p className="mb-1 text-[16px] font-bold">Collaborate</p>
              <p className="text-[14px] leading-[1]">
                Enhance teamwork with powerful real-time collaboration features.
              </p>
            </div>
          </div>
          <div className="absolute top-0 left-0 h-[31.5%] w-px"></div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
