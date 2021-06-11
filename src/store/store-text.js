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
  The coastline of Hong Kong is long and complex.  Whilst wave-exposed shores in Hong Kong are generally located along southern and eastern coasts due to long wave fetches opening towards the South China Sea, western coasts and shores within the Tolo Harbour are relatively sheltered as they are protected by adjacent islands or headlands.  In fact, the complex coastline and presence of numerous islands in Hong Kong waters (> 260 islands of various sizes, Williams et al. 2019) create spatially variable wave fetches and, when coupled with the highly heterogeneous geomorphology in coastal rock types (granites, sandstone, siltstone etc) and the east-west salinity/nutrient gradients created by the Pearl River discharge, a diverse set of physical environments are found along Hong Kong rocky shores.
  `,
  HKRockyShore2: `
  In terms of seasonal changes, Hong Kong experiences a seasonal tropical climate with primarily a hot & wet (~ May to Oct) and a cool & dry season (~ Dec to Mar) throughout the year.  During the hot & wet season, daily maximum air temperature can reach up to 35 °C (HKO, 2021), and rock temperature on the shore can reach even higher, attaining 62 °C at the maximum.  Mass mortality of rocky shore organisms is thus often observed during this time of the year, particularly for sessile species (e.g. mussels) which cannot move around to escape the heat stress.  On the other hand, however, rainfall in Hong Kong is also more frequent and intense in this season, with over 80% of annual rainfalls occurring during May to Sep (HKO, 2021) which, when combined with the hot temperature, can impose severe physiological stress to rocky shore organisms (Firth & Williams 2009).
  `,
  HKRockyShore3: `
  In the cool & dry season, although thermal stress is ameliorated, the stronger north-eastern monsoon (compared to the hot & wet season) results in stronger waves and thus higher dislodgement risk experienced by rocky shore organisms.  In this time of the year, macroalgae such as Phycocalidia spp. and Ulva spp. thrive on shores probably due to the low environmental temperature (with rock surface attaining a minimum of 4 °C), and the supply of larvae from temperate seas brought by the Taiwan Current (originates from the East China Sea).  The cool, less-saline Taiwan Current is, however, moderated by the south China branching of the Kuroshio Current, which carries warmer tropical waters and keeps Hong Kong waters relatively warm and saline even during the cool & dry season.  In the hot & wet season, due to the shift in monsoon direction, the South China Sea Warm Current (also known as the Hainan Current) prevails, bringing us warm waters and larvae of tropical species.  Overall, the dynamic seasonal changes and complex spatial variations in shore physical environments allow for a multitude of species to settle and live on Hong Kong rocky shores, which harbour a rich set of species assemblages that you can get to explore using this GIS!
  `,
  TidesMessage: `
  This territory-wide rocky shore survey is not possible without the dedication of a rather small group of enthusiastic (or crazy ...) rocky shore ecologists (call us TideChasers …): Steven Wong, Brian Leung, Jackson Lau, Valerie Hickey and Tommy Hui, all members of the <a
            href="https://www.tidehku.com/"
            target="_blank"
          >
            <strong>Tropical IntertiDal Ecology (TIDE) Group</strong>
          </a> led by Prof. Gray A. Williams at the Swire Institute of Marine Science, the University of Hong Kong.  This GIS was developed by Yvonne Li and Yifei Gu, computer specialists in the TIDE group.  The team would also like to thank other members of the TIDE group for their tremendous help both on the shore and in the laboratory, and grant number 105/2019 from the Environment Conservation Fund, HKSAR, which financed the project.
          `,
  stratification: `
  To achieve a representative sample of Hong Kong rocky shore biodiversity, the coastline of Hong Kong was stratified into six regions according to local hydrological characteristics and general shore directions: the north-western region which is heavily influenced by the Pearl River discharge (NW); the south-western region (SW), the southern region (SO), both regarded as the transition between the estuarine waters to the west and the oceanic waters to the east; the eastern region which is more oceanic and exposed (EA); the north-eastern region close to the border of China which is relatively undisturbed (NE) and the Tolo Harbour area which is a sheltered, enclosed bay in the New Territories (TL).
  `,
  method1: `
  Four sites were selected within each region, based on their exposures and sampling feasibilities, for the biodiversity survey.  Relatively exposed and sheltered sites were included in each of the six regions, in order to capture the variation in assemblage structures on shores with different wave-swept regimes.  At each site, six equidistant transects of ~ 16 m were laid from the low (defined as 0.25 m below the coralline zone, or 1.15 m above Chart Datum) to high tidal heights (defined as the Echinolittorina malaccana zone): high-high (HH), low-high (LM), high-mid (HM), low-mid (LM), high-low (HL) and low-low (LL).  Comparisons across sheltered and exposed shores are thus possible due to the tidal heights being defined operationally according to local, site-specific wave-swept regimes (based on the fact that E. malaccana follow the awash zone in the supralittoral fringe, see Lewis 1961, Gilman et al. 2006).
  `,
  method2: `
      At each transect, ten random 25 cm × 25 cm quadrats were surveyed and photographed.  All visible mobile species were counted, and all sessile species (e.g. bivalves, some sea anemones) were scored (in percentage cover) from the photographs using the software CPCe on computers.  A ten-minute rapid active search was also conducted during each survey to sample fast-moving crustaceans (scored using presence/absence) that could be missed during the quadrat survey.  Species richness (S), Shannon’s diversity (H’) and Pielou’s J evenness indice were subsequently computed from the assemblage data of each site.  The survey was repeated in both hot & wet and cool & dry seasons over a period of two years, resulting in a total of four temporal snapshots of assemblage structures along Hong Kong rocky coastline.  These species compositions (both mobile and sessile species) and ecological indice are available for viewing in the biological dashboards of different sites.
      `,
  quantifying: `
      In terms of the physical environment and food availability on the shore, temperature loggers were deployed at HH and LM tidal heights (n = 3 at each height) to log rock temperatures every h (± 0.5 °C, Envlogger, Electricchange, Portugal) for a period of two years.  Rock chips were also taken during the surveys (n = 4 along each tidal height) to quantify Chlorophyll a (Chl a) and organic matter concentrations via spectrophotometry and loss-on-ignition techniques.  Wave force impacting the shore at each site was quantified using a custom-built wavelogger deployed at the LM tidal height, which logs static accelerations caused on a rotor blade by the incoming wave every 10 s (Pendant G logger, HOBO Onset, USA).  Shore aspect and slope were measured using compasses and clinometers, respectively.  These physical information are available for viewing in the physical dashboards of different sites.
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
   
    `
};

export default {
  namespaced: true,
  state
};
