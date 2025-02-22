const About = () => {
  return (
    <div>
      <div className="w-full flex space-y-10 flex-col px-2 text-gray-200 items-center justify-center ">
        <p className="text-[10px]">à propos de nous</p>

        <div className="mb-3 flex flex-col items-center justify-center">
          <h1 className="font-bold text-2xl  font-mono">
            Nous sommes là pour gérer vos finances avec expérience
          </h1>
          <p className="w-10 h-1 bg-black2-1"></p>
        </div>
        <div className="flex w-full items-start gap-3 max-md:flex-col ">
          <div className="lg:w-2/5  w-full">
            <img src="public\img\bank_icons\about-2 (1).jpg" className="w-full h-80" alt="" />
            
          </div>
          <div className="space-y-10 text-sm flex-1">
            <p>
              Chez Sky Path Holdings, nous accordons de l'importance à toutes
              les relations que nous avons construites depuis 1839. Nous nous
              engageons à fournir à chaque relation un niveau de service
              inégalé. Bien que nous proposions des produits, des services, des
              tarifs et une technologie compétitifs, le niveau de service que
              nous fournissons et notre engagement à établir des relations sont
              ce qui nous distingue de nos concurrents. Prime Vista Holdings ne
              se développe pas seulement pour devenir plus grand. Nous
              grandissons pour satisfaire la demande continue d'une banque qui
              se concentre sur le service. Avec 211 agences bancaires à service
              complet, 19 bureaux d'octroi de prêts et plus de 3 000 employés,
              notre combinaison de produits compétitifs, combinée à un niveau de
              service élevé et à une concentration sur les relations, constitue
              une proposition de valeur exceptionnelle pour nos clients.
            </p>
            <p>
              Sky Path Holdings s'appuie sur une longue tradition de pratiques
              bancaires sûres et sécurisées qui nous ont permis de traverser des
              décennies d'environnements économiques en constante évolution.
              Pour cette raison, nos employés, nos clients, nos actionnaires et
              nos communautés peuvent compter sur nous pour être leur partenaire
              bancaire pour les décennies à venir.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
