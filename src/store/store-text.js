const state = {
  HKRISE: `
       <h>H</h>ong <h>K</h>ong <h>R</h>ocky shore <h>I</h>nteractive <h>S</h>earch <h>E</h>ngine (<h>HKRISE</h>) is a geographic information system (GIS) representing the findings from the first systematic, quantitative territory-wide rocky shore biodiversity survey in Hong Kong. With over 80% of Hong Kong's coastline being hard, rocky outcrops (Morton et al. 1996), rocky shores in Hong Kong not only are incredibly rich in biodiversity, but are also extremely dynamic through seasons where you will see completely different landscapes during monsoonal summer and winter. In this GIS you'll get to explore the species we found on a number of rocky shores in Hong Kong, from the oceanic east to the Pearl River-influenced west coast, from shores heavily influenced by anthropogenic impact to the remote, undisturbed northeastern islands, and from ferocious wave-exposed shores to calm, sheltered bays. As you will see, each rocky shore is quite unique not only in terms of their biota, but also in their physical characteristics which drive some of the variation we observe in species abundance and distribution. We hope, through the use of this GIS, you can visualize the biodiversity and physical environment of Hong Kong's rocky shore in a vivid way, compare and contrast spatial and seasonal differences in community structure, and to search for species distribution rapidly in an user-friendly interface. We also include in this GIS information on historical species distribution (1912 - 2015) from the review by Ng et al. 2017 (database available at  <a
            href="https://www.tidehku.com/"
            target="_blank"
          >
            <strong>Tropical IntertiDal Ecology (TIDE) Group</strong>
          </a> ) and, therefore, you can compare our current dataset with species records from the past. Let the exploration begin!
          `,

  HKRockyShore1: `
  The coastline of Hong Kong is long and complex. Whilst wave-exposed shores in Hong Kong are generally located along southern and eastern coasts due to long wave fetches opening towards the South China Sea, western coasts and shores within the Tolo Harbour are relatively sheltered as they are protected by adjacent islands or headlands. In fact, the complex coastline and presence of numerous islands in Hong Kong waters (> 260 islands of various sizes, Williams et al. 2019) create spatially variable wave fetches and, when coupled with the highly heterogeneous geomorphology in coastal rock types (granites, sandstone, siltstone etc) and the east-west salinity/nutrient gradients created by the Pearl River discharge, a diverse set of physical environments are found along Hong Kong rocky shores.
  `,
  HKRockyShore2: `
  In terms of seasonal changes, Hong Kong experiences a seasonal tropical climate with primarily a hot & wet (~ May to Oct) and a cool & dry season (~ Dec to Mar) throughout the year. During the hot & wet season, daily maximum air temperature can reach up to 37 °C (HKO, 2021), and rock temperature on the shore can reach even higher, attaining 62 °C at the maximum. Mass mortality of rocky shore organisms is thus often observed during this time of the year, particularly for sessile species (e.g. mussels) which cannot move around to escape the heat stress. On the other hand, however, rainfall in Hong Kong is also more frequent and intense in this season, with over 80% of annual rainfalls occurring during May to Sep (HKO, 2021) which, when combined with the hot temperature, can impose severe physiological stress to rocky shore organisms (Firth & Williams 2009).
  `,
  HKRockyShore3: `
  In the cool & dry season, although thermal stress is ameliorated, the stronger north-eastern monsoon (compared to the hot & wet season) results in stronger waves and thus higher dislodgement risk experienced by rocky shore organisms. In this time of the year, macroalgae such as <i>Phycocalidia</i> spp. and <i>Ulva</i> spp. thrive on shores probably due to the low environmental temperature (with rock surface attaining a minimum of 4 °C), and the supply of spores from temperate seas brought by the Taiwan Current (originates from the East China Sea). The cool, less-saline Taiwan Current is, however, moderated by the south China branching of the Kuroshio Current, which carries warmer tropical waters and keeps Hong Kong waters relatively warm and saline even during the cool & dry season. In the hot & wet season, due to the shift in monsoon direction, the South China Sea Warm Current (also known as the Hainan Current) prevails, bringing us warm waters and larvae of tropical species. Overall, the dynamic seasonal changes and complex spatial variations in shore physical environments allow for a multitude of species to settle and live on Hong Kong rocky shores, which harbour a rich set of species assemblages that you can get to explore using this GIS!
  `,
  TidesMessage: `
  This territory-wide rocky shore survey is not possible without the dedication of a rather small group of enthusiastic (or crazy ...) rocky shore ecologists (call us TideChasers …): Steven Wong, Brian Leung, Jackson Lau, Valerie Hickey and Tommy Hui, all members of the <a
            href="https://www.tidehku.com/"
            target="_blank"
          >
            <strong>Tropical IntertiDal Ecology (TIDE) Group</strong>
          </a> led by Prof. Gray A. Williams at the Swire Institute of Marine Science, the University of Hong Kong. This GIS was developed by Yvonne Li and Yifei Gu, computer specialists in the TIDE group. The team would also like to thank other members of the group for their tremendous help both on the shore and in the laboratory, and Simon Tse for his kind assistance (and lots of video recordings!) during our fieldwork.  The cool cartoons in the <a href="./#/interactiveHabitat">MAP</a> page were drawn by Miss Kam Yan Chit, a final year UG student in our group during 2020 to 2021. Numerous volunteers helped us in the field, recording species datasheets, looking for cool species and/or getting splashed by the waves … Thanks also go to Rachel, Cecily, Hong and Alan for their assistance in ordering equipment and local transportation.
<br />
<br />
          We are grateful to Ir. Dr. Ryan Wong and Mr. Kuen (Department of Civil Engineering, HKU) for their help in lending the GNSS RTK system to us for accurately locating transect positions and heights.  We are also indebted to numerous taxonomists: Dr. Benny Chan (Academia Sinica, Taiwan), Mr. Kingsley Wong (National Taiwan University, Taiwan), Dr. Suzanne Williams (Natural History Museum, UK), Dr. Yuri Kantor (Russian Academy of Science, Russia) and Dr. David Reid who kindly shared their expertises and identified specimens for us.
          <br />
          <br />
          Finally, we sincerely thank the Environment Conservation Fund, HKSAR, which financed the project (grant number 105/2019).          
          `,
  stratification: `
  To achieve a representative sample of Hong Kong rocky shore biodiversity, the coastline of Hong Kong was stratified into six regions according to local hydrology and general shore directions: the northwestern region which is heavily influenced by the Pearl River discharge (NW); the southwestern (SW) and the southern region (SO), both regarded as the transition between the estuarine waters to the west and the oceanic waters to the east; the eastern region which is more oceanic and exposed (EA); the northeastern region which is close to the border of China and relatively undisturbed (NE) and the Tolo Harbour region which is a sheltered, enclosed bay in the New Territories (TL).
  `,
  method1: `
  Within each region, four sites were selected based on their exposure and sampling feasibility for the biodiversity survey.  Relatively exposed and sheltered sites were included in order to capture the variation in assemblage structures on shores with different wave-swept regimes.  At each site, six equidistant transects of ~ 16 m were laid from the low (defined as 0.25 m below the coralline zone, or 1.15 m above Chart Datum) to high tidal heights (defined as the <i>Echinolittorina malaccana zone</i>): high-high (HH), low-high (LH), high-mid (HM), low-mid (LM), high-low (HL) and low-low (LL).  Comparisons across sheltered and exposed shores are thus possible due to the tidal heights being defined operationally according to local, site-specific wave-swept regimes (based on the fact that <i>E. malaccana</i> follow the awash zone in the supralittoral fringe, see Lewis 1961, Gilman et al. 2006).
  `,
  method2: `
  At each transect, ten random 25 cm × 25 cm quadrats were surveyed and photographed.  All visible mobile species were counted, and all sessile species (e.g. bivalves, some sea anemones) were scored (in percentage cover) from the photographs using the software <a
  href="https://hcas.nova.edu/tools-and-resources/cpce/index.html"
  target="_blank"
  >
  <strong>CPCe</strong>
  </a> on computers.  A ten-minute rapid active search was also conducted during each survey to sample fast-moving crustaceans (scored using presence/absence) that could be missed during the quadrat survey.  Species richness (<i>S</i>), Shannon’s diversity (<i>H’</i>) and Pielou’s <i>J</i> evenness indices were subsequently computed.  The survey was repeated in both the hot & wet and cool & dry seasons over a period of two years, resulting in a total of four temporal snapshots of assemblage structures along Hong Kong rocky coastline.  These species compositions (both mobile and sessile species) and ecological indices are available for viewing in the biological dashboards of different sites.
  `,
  quantifying: `
  In terms of the physical environment and food availability on the shore, temperature loggers were deployed at the HH and LM tidal heights (n = 3 at each height) to log rock temperatures every h (± 0.5 °C, <a
    href="https://electricblue.eu/envloggers"
    target="_blank"
    >
    <strong>Envlogger, ElectricBlue, Portugal</strong>
    </a>) for a period of two years.  Rock chips were also taken during the surveys (n = 4 along each tidal height) to quantify Chlorophyll <i>a</i> (Chl <i>a</i>) and organic matter concentrations via spectrophotometry and loss-on-ignition techniques.  Wave force impacting the shore at each site was quantified using a custom-built wavelogger deployed at the LM tidal height, which logs static accelerations caused on a rotor blade by the incoming wave every 10 s (<a
    href="https://www.onsetcomp.com/products/data-loggers/ua-004-64/"
    target="_blank"
    >
    <strong>HOBO Pendant G logger, Onset, USA</strong>
    </a>).  Shore aspect and slope were measured using compasses and clinometers, respectively.  These physical information are available for viewing in the physical dashboards of different sites.
  `,
  reference: `
    
    <p style="text-indent:-2em;">Burrows MT, Harvey R, Robb L (2008) Wave exposure indices from digital coastlines and the prediction of rocky shore community structure. <br /> Mar Ecol Prog Ser 353:1-12</p>
 

    <p style="text-indent:-2em;">CEDD (2006) Hong Kong geological survey - geological map of Hong Kong. The Government of the Hong Kong SAR</p>
    
    <p style="text-indent:-2em;">Firth LB, Williams GA (2009) The influence of multiple environmental stressors on the limpet <i>Cellana toreuma</i> during the summer monsoon <br /> season in Hong Kong. J Exp Mar Biol Ecol 375:70-75</p>

    <p style="text-indent:-2em;">Gilman SE, Harley CDG, Strickland DC, Vanderstraeten O, O'Donnell MJ, Brian H (2006) Evaluation of effective shore level as a method of <br /> characterizing intertidal wave exposure regime. Limno Oceanogr Meth 4:448-457</p>

    <p style="text-indent:-2em;">Hong Kong Observatory (2021) Climatological information services. URL: <a href="https://www.hko.gov.hk/en/cis/climat.htm" target="_blank">https://www.hko.gov.hk/en/cis/climat.htm</a></p>

    <p style="text-indent:-2em;">Lands Department (1995) Explanatory notes on geodetic datums in Hong Kong. Hong Kong Government, Hong Kong</p>

    <p style="text-indent:-2em;">Lewis JR (1961) The littoral zone on rocky shores - a biological or physical entity? Oikos 12:280-301</p>

    <p style="text-indent:-2em;">Morton B, Williams GA, Lee SY (1996) The benthic marine ecology of Hong Kong: a dwindling heritage?  Coastal Infrastructure Development <br /> in Hong Kong: A Review. Hong Kong Government, Hong Kong</p>

    <p style="text-indent:-2em;">Ng TPT, Cheng MCF, Ho KKY, Lui GCS, Leung KMY, Williams GA (2017) Hong Kong's rich marine biodiversity: the unseen wealth of South <br /> China's megalopolis. Biodivers Conserv 26:23-36</p>

    <p style="text-indent:-2em;">Shannon CE, Weaver W (1949) The mathematical theory of communication. University of Illinois Press</p>

    <p style="text-indent:-2em;">Williams GA, Chan BKK, Dong Y-w (2019) Rocky shores of mainland China, Taiwan and Hong Kong. In: Hawkins SJ, Bohn K, Firth LB, Williams GA (eds) <br /> Interactions in the Marine Benthos - Global Patterns and Processes. Systematics Association, Cambridge University Press</p>
   
    `,
  bioGlossary: [
    {
      name: "Mobile species",
      description: `Species that are able to move around on their own, including most gastropods (snails and limpets), crabs and fishes.`
    },
    {
      name: "Sessile species",
      description: `Species with limited or no ability to move around, such as algae, bivalves (oysters and mussels) and some sea anemones.  In some cases, an entity in sessile species might not correspond to a single species but a mix of microbial species constituting an unique functional entity, e.g. high shore biofilm, that is hard to be further separated into species level in the field/from the photographes.`
    },
    {
      name: "Abundance and incidence",
      description: `Abundance refers to the count of mobile species while incidence refers to the number of occupancy by sessile species out of the total number of sampling units.  In the site biological dashboards, abundance and incidence are expressed in terms of the total count and number of occupancy out of the total number of quadrats surveyed (each quadrat = 25 cm × 25 cm).`
    },
    {
      name: "Shannon’s diversity index (<i>H’</i>) ",
      description: `A diversity index based on Shannon & Weaver (1949), calculated using the formula <i>H’</i> = - Σ pi log pi (where i ranges from 1 to the total number of species found, and pi is the proportion of the abundance of species i in the sampling area).  A higher value of <i>H’</i> indicates a more diverse assemblage at a sampling area (either by increasing the number of species or having species with more similar numbers of individuals).  In our project, <i>H’</i> is calculated based on identified mobile species where counts are available.`
    },
    {
      name: "Species richness (<i>S</>)",
      description: `The total number of either sessile or mobile species found in a sampling area, where counts or presence/absence data are available (either based on region/site in this GIS).`
    },
    {
      name: "Pielou’s evenness index (<i>J</i>)",
      description: `An index used to indicate the evenness of species distribution in an assemblage, calculated by dividing <i>H’</i> with the maximum possible value of <i>H’</i>.  A higher <i>J</i> indicates a more even assemblage at a sampling area (species are having more similar numbers of individuals, instead of having a heavily dominant species).  In our project, <i>J</i> is calculated based on identified mobile species where counts are available.`
    },
    {
      name: "Chlorophyll <i>a</i> (Chl <i>a</i>) concentration",
      description: `A proxy for algal/biofilm biomass on the rock surface, measured using spectrophotometry (extraction using cold methanol) and expressed in µg/cm².  A higher value indicates higher standing stock of algae/cyanobacteria on the rock surface, which could be resulted from a higher productivity in the surrounding pelagic environment, or reduced consumer pressure (less abundance of grazers on the shore, see Williams et al. 2000).`
    },
    {
      name: "Organic matter (OM) concentration",
      description: `A proxy for total biomass (including algae, cyanobacteria, bacteria etc) on the rock surface, measured using mass loss-on-ignition (in a muffle furnace at 500 °C for 4 h) and expressed in mg/cm².`
    }
  ],
  phyGlossary: [
    {
      name: "Total wave fetch",
      description: `The total distance of seas along 16 equiangular directions from a coastal location to surrounding land masses (up to 200 km).  Longer the wave fetch generally implies stronger wave action impacting the shore (see Burrows et al. 2008).`
    },
    {
      name: "Max. wave force",
      description: `The maximum force (measured in N) estimated using a custom-built wavelogger with an accelerometer.  The logger was deployed at the low-mid level on the shore for 48 h, recording acceleration every 10 s.  The readings were, therefore, subjected to the prevailing wind direction and speed during the recording period.`
    },
    {
      name: "Rock temperature",
      description: `Rock surface temperature (measured in °C) using rugged temperature loggers attached onto the rock surface using marine epoxy.  Temperatures were recorded every 1 h for a period of 2 years at our study sites.`
    },
    {
      name: "Shore aspect",
      description: `The direction faced by the shore, measured using a hand-held compass (expressed in ° from the north direction).`
    },
    {
      name: "Shore slope",
      description: `The inclination of the shore measured in °, ranging from 0° (a completely horizontal shore) to 90° (a completely vertical shore).`
    },
    {
      name: "Rock type",
      description: `Geological formation/composition of rocks in our sampling sites, adopting the classification based on CEDD (2006).`
    },
    {
      name: "Chart Datum (C. D.)",
      description: `Water level during the lowest astronomical tide, which has been adopted as the reference level to measure tidal height in Hong Kong since 1917 (Lands Department, 1995).`
    },
    {
      name: "Wave exposure icons",
      description: `In the regional landing page where you can select information of the four study sites within that region, there is a “wave exposure icon” next to each site.  As we deliberately selected four sites with different wave exposures within a region, the icon indicates the relative wave exposure of that site: most exposed, semi-exposed and least exposed within the region.`
    }
  ],
  regionNW: `
  The Northwestern (NW) region is heavily influenced by the outflow of the Pearl River. The high sedimentation rate of the Pearl River, together with the rapid development in the region (e.g. the expansion of the Hong Kong International Airport, Hong Kong-Zhuhai-Macau Bridge), have impacted water quality with increased eutrophication and suspended solids. Used to be one of the major habitats of Chinese White Dolphin in Hong Kong, some dolphin tour boats and observation lookouts are still popular in the region (e.g. Tai O, Lung Kwu Tan).
  `,
  regionEA: `
  The Eastern (EA) region receives strong, saline oceanic currents from the South China sea where the water is deeper and clearer. Eastern coast, therefore, has stronger wave action and better water quality (higher concentration of dissolved oxygen and lower turbidity) compared to the western coast. Some of our sites in the region are located inside the Sai Kung Country Park (e.g. Sai Wan, Pak Lap), known to be the “backyard of Hong Kong” and is a popular nature-lovers destination. Because of the better water quality the region is also a common spot for diving (e.g. Pak Shui Wun) and watersport (amidst the relatively sheltered islands off Sai Kung area, e.g. Kau Sai Chau).
  `,
  regionNE: `
  The Northeastern (NE) region receives lower wave exposure compared to the Eastern region as it is sheltered by mainland China at the North. This region generally has good water quality and lower disturbance as it is remote, protected by Geological Park and has low population levels (only a few Hakka villages remaining). To get to our sites in this region we will inevitably need to hire a boat (e.g. Double Island, Kat O) or otherwise undertake a strenuous, long-distance hike (e.g. Yung Shue Au, Hung Shek Mun). But because of the remoteness, shores in this region support a vast number of species including even corals!
  `,
  regionSO: `
  The Southern (SO) region belongs to the transitional zone between the Pearl River influx and oceanic currents to the eastern waters of Hong Kong. Water quality of the region is less influenced by the Pearl River, but some of our study sites in the region (e.g. Wah Fu) are located close to the Victoria Harbour, one of the busiest shipping waters in the world. On the eastern side, however, shores generally experience strong wave action due to the direct and long fetches opening towards the South China Sea (e.g. Shek O). Recreational activities are not uncommon in the region, with popular beaches located just next to our sites (e.g. Middle Bay).
  `,
  regionSW: `
  The Southwestern (SW) region is located along the Pearl River outflow, but is partially blocked against the direct outlet by the Lantau Island. Although the region is less urbanized (with the Lantau South Country Park occupying 56 km²), southern Lantau is a popular spot for recreational activities such as clam digging, camping and coaststeering (e.g. Pui O, Tai Long Wan), thus experiencing anthropogenic impacts particularly during the summer holiday. Vessel traffic is also not uncommon (particularly off the shore at Peng Chau), with ships travelling back and forth through Ma Wan Channel at the northeastern tip of Lantau.
        `,
  regionTL: `
  The Tolo Harbour (TL) region has a weak water circulation due to being located in a sheltered channel with a narrow exit to the open sea. Historically the high concentration of discharged sewage trapped within the Tolo Harbour had resulted in frequent eutrophication events, which have been alleviated in recent years by better water treatment and sewage management (though red tides and hypoxia are still not uncommon particularly during Mar - Aug). Coastal rocks are quite soft in the region (e.g. Tseng Tau, Ma Shi Chau), as geologically sandstone/siltstone is common in this region.
        `
};

export default {
  namespaced: true,
  state
};
