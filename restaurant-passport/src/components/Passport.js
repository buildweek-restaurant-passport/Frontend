import React, {useState} from 'react';
import { Container, Header, Grid, Form, Search, Label } from "semantic-ui-react";
import _ from 'lodash'

const Passport = () => {
  const [restaurants, setRestaurants] = useState(restaurantList)
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [value, setValue] = useState('');

const resultRenderer = ({ business_name }) => <Label content={business_name} />


 const handleResultSelect = (e, { result }) => setValue( result.business_name )

  const handleSearchChange = (e, { value }) => {
    setIsLoading(true)
    setValue(value)
    setTimeout(() => {
      //if (value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(value), 'i')
      const isMatch = result => re.test(result.business_name)
      setIsLoading(false)
      setResults(_.filter(restaurants, isMatch))
    }, 300)
  }

  return (
    <Container style={{ marginTop: "3em" }}>
      <Header as="h1">San Francisco Passport</Header>
      <Header as="h2" dividing>Search
            <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={handleResultSelect}
            onSearchChange={_.debounce(handleSearchChange, 500, {
              leading: true,
            })}
            results={results}
            value={value}
            resultRenderer={resultRenderer}
            
          />
        </Grid.Column>
        </Grid>


        
      </Header>

      <div className="min-h-screen flex items-center justify-center">
        <Grid centered columns={4}>
          {restaurants.map(rest => (
                <Grid.Column key={rest.business_id.toString()}>
      <div className=" rounded overflow-hidden shadow-lg" >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{rest.business_name}</div>
          <p className="text-gray-700 text-base">{`${rest.business_city}, ${rest.business_state}`}</p>
          <p className="text-gray-700 text-base">{`${rest.business_address}, ${rest.business_phone_number}`}</p>
        </div>
        <div className="px-6 py-4">
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-green-200">
            Visit
          </p>
          <p className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 bg-red-200">
            Dont Visit
          </p>
        </div>
      </div>
    </Grid.Column>
          ))}
        </Grid>
      </div>
    </Container>


    )
}

export default Passport;

//<img className="tw-w-full" src={props.photo.url} alt="" />




const restaurantList = [{"business_id":"101192","business_name":"Cochinita #2","business_address":"2 Marina Blvd Fort Mason","business_city":"San Francisco","business_state":"CA","business_phone_number":"+14150429222","inspection_id":"101192_20190606","inspection_date":"2019-06-06T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"97975","business_name":"BREADBELLY","business_address":"1408 Clement St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94118","business_phone_number":"+14157240859","inspection_id":"97975_20190725","inspection_date":"2019-07-25T00:00:00.000","inspection_score":"96","inspection_type":"Routine - Unscheduled","violation_id":"97975_20190725_103124","violation_description":"Inadequately cleaned or sanitized food contact surfaces","risk_category":"Moderate Risk"}
,{"business_id":"70142","business_name":"Rosa Mexicano","business_address":"30 Mission St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94105","inspection_id":"70142_20190408","inspection_date":"2019-04-08T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"101389","business_name":"HOMAGE","business_address":"214 CALIFORNIA ST","business_city":"San Francisco","business_state":"CA","business_postal_code":"94111","business_phone_number":"+14154878161","inspection_id":"101389_20190625","inspection_date":"2019-06-25T00:00:00.000","inspection_type":"New Construction"}
,{"business_id":"98974","business_name":"Brickhouse","business_address":"426 BRANNAN ST","business_city":"San Francisco","business_state":"CA","business_postal_code":"94107","business_phone_number":"+14158386448","inspection_id":"98974_20190321","inspection_date":"2019-03-21T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"99342","business_name":"LAI HONG RESTAURANT","business_address":"1416 POWELL ST","business_city":"San Francisco","business_state":"CA","business_postal_code":"94133","inspection_id":"99342_20190222","inspection_date":"2019-02-22T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"95754","business_name":"Fools Errand","business_address":"639 Divisadero St A","business_city":"San Francisco","business_state":"CA","business_postal_code":"94117","inspection_id":"95754_20190327","inspection_date":"2019-03-27T00:00:00.000","inspection_score":"84","inspection_type":"Routine - Unscheduled","violation_id":"95754_20190327_103124","violation_description":"Inadequately cleaned or sanitized food contact surfaces","risk_category":"Moderate Risk"}
,{"business_id":"77005","business_name":"MoBowL","business_address":"428 11th St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","business_phone_number":"+14159636568","inspection_id":"77005_20170429","inspection_date":"2017-04-29T00:00:00.000","inspection_score":"94","inspection_type":"Routine - Unscheduled","violation_id":"77005_20170429_103120","violation_description":"Moderate risk food holding temperature","risk_category":"Moderate Risk"}
,{"business_id":"79804","business_name":"CurveBall","business_address":"428 11th St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","business_phone_number":"+14150287297","inspection_id":"79804_20190325","inspection_date":"2019-03-25T00:00:00.000","inspection_type":"Structural Inspection"}
,{"business_id":"77404","business_name":"Shabu Bar","business_address":"219 King St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94107","inspection_id":"77404_20180123","inspection_date":"2018-01-23T00:00:00.000","inspection_score":"68","inspection_type":"Routine - Unscheduled","violation_id":"77404_20180123_103105","violation_description":"Improper cooling methods","risk_category":"High Risk"}
,{"business_id":"100870","business_name":"TOP SF BBQ","business_address":"2311 CLEMENT ST","business_city":"San Francisco","business_state":"CA","business_postal_code":"94121","business_phone_number":"+14155578201","inspection_id":"100870_20190705","inspection_date":"2019-07-05T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"71440","business_name":"New Garden Restaurant, Inc.","business_address":"716 Kearny St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94108","inspection_id":"71440_20190401","inspection_date":"2019-04-01T00:00:00.000","inspection_score":"85","inspection_type":"Routine - Unscheduled","violation_id":"71440_20190401_103150","violation_description":"Improper or defective plumbing","risk_category":"Low Risk"}
,{"business_id":"70708","business_name":"El Calamar","business_address":"Off The Grid","business_city":"San Francisco","business_state":"CA","business_phone_number":"+14155713080","inspection_id":"70708_20181218","inspection_date":"2018-12-18T00:00:00.000","inspection_score":"74","inspection_type":"Routine - Unscheduled","violation_id":"70708_20181218_103112","violation_description":"No hot water or running water","risk_category":"High Risk"}
,{"business_id":"85594","business_name":"The Pearl","business_address":"601 19th St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94107","business_phone_number":"+14155267171","inspection_id":"85594_20190325","inspection_date":"2019-03-25T00:00:00.000","inspection_score":"92","inspection_type":"Routine - Unscheduled","violation_id":"85594_20190325_103119","violation_description":"Inadequate and inaccessible handwashing facilities","risk_category":"Moderate Risk"}
,{"business_id":"69962","business_name":"Hong Kee & Kim","business_address":"91 Drumm St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94111","inspection_id":"69962_20190711","inspection_date":"2019-07-11T00:00:00.000","inspection_score":"68","inspection_type":"Routine - Unscheduled","violation_id":"69962_20190711_103161","violation_description":"Low risk vermin infestation","risk_category":"Low Risk"}
,{"business_id":"78545","business_name":"Red Hill Station","business_address":"803 Cortland Ave","business_city":"San Francisco","business_state":"CA","business_postal_code":"94110","inspection_id":"78545_20190416","inspection_date":"2019-04-16T00:00:00.000","inspection_score":"70","inspection_type":"Routine - Unscheduled","violation_id":"78545_20190416_103114","violation_description":"High risk vermin infestation","risk_category":"High Risk"}
,{"business_id":"96718","business_name":"PALACE OF SPICES","business_address":"173 Eddy St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94102","inspection_id":"96718_20180904","inspection_date":"2018-09-04T00:00:00.000","inspection_score":"83","inspection_type":"Routine - Unscheduled","violation_id":"96718_20180904_103154","violation_description":"Unclean or degraded floors walls or ceilings","risk_category":"Low Risk"}
,{"business_id":"84740","business_name":"Judie's Tacos Locos","business_address":"Off The Grid","business_city":"San Francisco","business_state":"CA","business_phone_number":"+14159421211","inspection_id":"84740_20190326","inspection_date":"2019-03-26T00:00:00.000","inspection_type":"Structural Inspection"}
,{"business_id":"96775","business_name":"WOW THAI KITCHEN","business_address":"701 Randolph St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94132","business_phone_number":"+14155586726","inspection_id":"96775_20190327","inspection_date":"2019-03-27T00:00:00.000","inspection_score":"94","inspection_type":"Routine - Unscheduled","violation_id":"96775_20190327_103161","violation_description":"Low risk vermin infestation","risk_category":"Low Risk"}
,{"business_id":"97895","business_name":"HYATT PLACE SAN FRANCISCO DOWNTOWN","business_address":"701 03rd St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94107","inspection_id":"97895_20190110","inspection_date":"2019-01-10T00:00:00.000","inspection_score":"100","inspection_type":"Routine - Unscheduled"}
,{"business_id":"84740","business_name":"Judie's Tacos Locos","business_address":"Off The Grid","business_city":"San Francisco","business_state":"CA","business_phone_number":"+14159421211","inspection_id":"84740_20170919","inspection_date":"2017-09-19T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"99767","business_name":"THE VAULT RESTAURANT","business_address":"555 CALIFORNIA St STE E","business_city":"San Francisco","business_state":"CA","business_postal_code":"94104","inspection_id":"99767_20190613","inspection_date":"2019-06-13T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"98971","business_name":"TAYLOR LANE ORGANIC COFFEE","business_address":"2001 MARKET St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94114","business_phone_number":"+14157521088","inspection_id":"98971_20190104","inspection_date":"2019-01-04T00:00:00.000","inspection_score":"100","inspection_type":"Routine - Unscheduled"}
,{"business_id":"74866","business_name":"Tacolicious","business_address":"1548 Stockton St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94133","inspection_id":"74866_20190117","inspection_date":"2019-01-17T00:00:00.000","inspection_score":"81","inspection_type":"Routine - Unscheduled","violation_id":"74866_20190117_103161","violation_description":"Low risk vermin infestation","risk_category":"Low Risk"}
,{"business_id":"87337","business_name":"Whisk On Wheels","business_address":"Off the Grid","business_city":"San Francisco","business_state":"CA","inspection_id":"87337_20190325","inspection_date":"2019-03-25T00:00:00.000","inspection_type":"Structural Inspection"}
,{"business_id":"18577","business_name":"AMC Theatres Metreon 16 - Main Stand","business_address":"135 04th St  3000","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","business_latitude":"37.784548","business_longitude":"-122.40419","business_location":{"latitude":"37.784548","longitude":"-122.40419","human_address":"{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"},"inspection_id":"18577_20180727","inspection_date":"2018-07-27T00:00:00.000","inspection_type":"Complaint","violation_id":"18577_20180727_103131","violation_description":"Moderate risk vermin infestation","risk_category":"Moderate Risk",":@computed_region_fyvs_ahh9":"6",":@computed_region_p5aj_wyqh":"2",":@computed_region_rxqg_mtj9":"9",":@computed_region_yftq_j783":"12",":@computed_region_bh8s_q3mv":"28853",":@computed_region_ajp5_b2md":"8"}
,{"business_id":"94465","business_name":"Beautifull LLC","business_address":"3401 California St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94118","inspection_id":"94465_20190321","inspection_date":"2019-03-21T00:00:00.000","inspection_score":"81","inspection_type":"Routine - Unscheduled","violation_id":"94465_20190321_103129","violation_description":"Insufficient hot water or running water","risk_category":"Moderate Risk"}
,{"business_id":"97829","business_name":"PLATFORM 248","business_address":"248 09 St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","inspection_id":"97829_20181010","inspection_date":"2018-10-10T00:00:00.000","inspection_type":"New Construction"}
,{"business_id":"68148","business_name":"Sheng Kee Bakery & Cafe","business_address":"814-816 Irving St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94122","inspection_id":"68148_20190606","inspection_date":"2019-06-06T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"85320","business_name":"Curry Up Now #4","business_address":"Approved Locations","business_city":"San Francisco","business_state":"CA","inspection_id":"85320_20190326","inspection_date":"2019-03-26T00:00:00.000","inspection_type":"Structural Inspection"}
,{"business_id":"4844","business_name":"SAFEWAY #909","business_address":"730 TARAVAL","business_city":"San Francisco","business_state":"CA","business_postal_code":"94116","business_latitude":"37.743191","business_longitude":"-122.473903","business_location":{"latitude":"37.743191","longitude":"-122.473903","human_address":"{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"},"inspection_id":"4844_20170829","inspection_date":"2017-08-29T00:00:00.000","inspection_score":"94","inspection_type":"Routine - Unscheduled","violation_id":"4844_20170829_103120","violation_description":"Moderate risk food holding temperature","risk_category":"Moderate Risk",":@computed_region_fyvs_ahh9":"40",":@computed_region_p5aj_wyqh":"8",":@computed_region_rxqg_mtj9":"4",":@computed_region_yftq_j783":"1",":@computed_region_bh8s_q3mv":"29491",":@computed_region_ajp5_b2md":"41"}
,{"business_id":"92982","business_name":"Foxsister","business_address":"3161 24th St.","business_city":"San Francisco","business_state":"CA","business_postal_code":"94110","inspection_id":"92982_20170925","inspection_date":"2017-09-25T00:00:00.000","inspection_score":"100","inspection_type":"Routine - Unscheduled"}
,{"business_id":"96565","business_name":"LA FLOR DE IZOTE","business_address":"3781 MISSION ST","business_city":"San Francisco","business_state":"CA","business_postal_code":"94110","business_phone_number":"+14155799640","inspection_id":"96565_20180808","inspection_date":"2018-08-08T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"5211","business_name":"Wattis Room, The","business_address":"201 Van Ness Ave","business_city":"San Francisco","business_state":"CA","business_postal_code":"94102","business_latitude":"37.777282","business_longitude":"-122.419751","business_location":{"latitude":"37.777282","longitude":"-122.419751","human_address":"{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"},"inspection_id":"5211_20180502","inspection_date":"2018-05-02T00:00:00.000","inspection_type":"Non-inspection site visit",":@computed_region_fyvs_ahh9":"10",":@computed_region_p5aj_wyqh":"9",":@computed_region_rxqg_mtj9":"11",":@computed_region_yftq_j783":"7",":@computed_region_bh8s_q3mv":"28852",":@computed_region_ajp5_b2md":"9"}
,{"business_id":"86170","business_name":"Paparikas","business_address":"645 Clay St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94111","inspection_id":"86170_20180615","inspection_date":"2018-06-15T00:00:00.000","inspection_type":"Reinspection/Followup","violation_id":"86170_20180615_103142","violation_description":"Unclean nonfood contact surfaces","risk_category":"Low Risk"}
,{"business_id":"88873","business_name":"Jamba Juice","business_address":"3251 20th Ave","business_city":"San Francisco","business_state":"CA","business_postal_code":"94132","business_phone_number":"+14150864823","inspection_id":"88873_20161018","inspection_date":"2016-10-18T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"96784","business_name":"PRESIDIO PIZZA COMPANY","business_address":"1862 Divisdero St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94115","business_phone_number":"+14155358787","inspection_id":"96784_20190617","inspection_date":"2019-06-17T00:00:00.000","inspection_score":"84","inspection_type":"Routine - Unscheduled","violation_id":"96784_20190617_103129","violation_description":"Insufficient hot water or running water","risk_category":"Moderate Risk"}
,{"business_id":"70034","business_name":"Il Canto Cafe","business_address":"275 Battery St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94111","inspection_id":"70034_20190319","inspection_date":"2019-03-19T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"85952","business_name":"Juice Craze","business_address":"3251 20th Ave 5517","business_city":"San Francisco","business_state":"CA","business_postal_code":"94132","business_phone_number":"+14150421739","inspection_id":"85952_20190328","inspection_date":"2019-03-28T00:00:00.000","inspection_type":"Non-inspection site visit"}
,{"business_id":"77681","business_name":"Tart To Tart Inc.","business_address":"641 Irving St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94122","business_phone_number":"+14155507068","inspection_id":"77681_20190404","inspection_date":"2019-04-04T00:00:00.000","inspection_score":"82","inspection_type":"Routine - Unscheduled","violation_id":"77681_20190404_103139","violation_description":"Improper food storage","risk_category":"Low Risk"}
,{"business_id":"81235","business_name":"Burmese Kitchen","business_address":"3815 Geary Blvd","business_city":"San Francisco","business_state":"CA","business_postal_code":"94118","business_phone_number":"+14155475569","inspection_id":"81235_20180411","inspection_date":"2018-04-11T00:00:00.000","inspection_score":"88","inspection_type":"Routine - Unscheduled","violation_id":"81235_20180411_103139","violation_description":"Improper food storage","risk_category":"Low Risk"}
,{"business_id":"62051","business_name":"Parada 22","business_address":"1805 HAIGHT St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94117","business_latitude":"37.769303","business_longitude":"-122.451961","business_location":{"latitude":"37.769303","longitude":"-122.451961","human_address":"{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"},"business_phone_number":"+14155904077","inspection_id":"62051_20180514","inspection_date":"2018-05-14T00:00:00.000","inspection_score":"86","inspection_type":"Routine - Unscheduled","violation_id":"62051_20180514_103154","violation_description":"Unclean or degraded floors walls or ceilings","risk_category":"Low Risk",":@computed_region_fyvs_ahh9":"9",":@computed_region_p5aj_wyqh":"5",":@computed_region_rxqg_mtj9":"11",":@computed_region_yftq_j783":"15",":@computed_region_bh8s_q3mv":"29492",":@computed_region_ajp5_b2md":"3"}
,{"business_id":"96132","business_name":"Facebook INC","business_address":"181 Fremont St 25th FL","business_city":"San Francisco","business_state":"CA","business_postal_code":"94105","inspection_id":"96132_20180529","inspection_date":"2018-05-29T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"71999","business_name":"Shabu Club","business_address":"951 Clement St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94118","inspection_id":"71999_20181015","inspection_date":"2018-10-15T00:00:00.000","inspection_score":"94","inspection_type":"Routine - Unscheduled","violation_id":"71999_20181015_103144","violation_description":"Unapproved or unmaintained equipment or utensils","risk_category":"Low Risk"}
,{"business_id":"96451","business_name":"USHITARO","business_address":"1382 9TH AVE","business_city":"San Francisco","business_state":"CA","business_postal_code":"94122","business_phone_number":"+14155335909","inspection_id":"96451_20180604","inspection_date":"2018-06-04T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"77005","business_name":"MoBowL","business_address":"428 11th St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","business_phone_number":"+14159636568","inspection_id":"77005_20170429","inspection_date":"2017-04-29T00:00:00.000","inspection_score":"94","inspection_type":"Routine - Unscheduled","violation_id":"77005_20170429_103149","violation_description":"Wiping cloths not clean or properly stored or inadequate sanitizer","risk_category":"Low Risk"}
,{"business_id":"81802","business_name":"Dos Pinas","business_address":"251 Rhode Island","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","inspection_id":"81802_20190326","inspection_date":"2019-03-26T00:00:00.000","inspection_score":"90","inspection_type":"Routine - Unscheduled","violation_id":"81802_20190326_103144","violation_description":"Unapproved or unmaintained equipment or utensils","risk_category":"Low Risk"}
,{"business_id":"81580","business_name":"The TL","business_address":"517 O'Farrell St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94102","inspection_id":"81580_20190404","inspection_date":"2019-04-04T00:00:00.000","inspection_score":"100","inspection_type":"Routine - Unscheduled"}
,{"business_id":"91210","business_name":"Fifth St. Cafe Corporation","business_address":"155 5th St.","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","inspection_id":"91210_20190529","inspection_date":"2019-05-29T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"96566","business_name":"SANPPO RESTAURANT","business_address":"1702 POST ST","business_city":"San Francisco","business_state":"CA","business_postal_code":"94115","business_phone_number":"+14155343486","inspection_id":"96566_20181228","inspection_date":"2018-12-28T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"92459","business_name":"Ella's Cafe","business_address":"500 presidio Ave","business_city":"San Francisco","business_state":"CA","business_postal_code":"94115","inspection_id":"92459_20190315","inspection_date":"2019-03-15T00:00:00.000","inspection_score":"75","inspection_type":"Routine - Unscheduled","violation_id":"92459_20190315_103157","violation_description":"Food safety certificate or food handler card not available","risk_category":"Low Risk"}
,{"business_id":"96698","business_name":"EIGHTEA","business_address":"91 06th St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","inspection_id":"96698_20190410","inspection_date":"2019-04-10T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"72169","business_name":"Pastel Brazzuca","business_address":"290 De Haro St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","inspection_id":"72169_20190326","inspection_date":"2019-03-26T00:00:00.000","inspection_score":"94","inspection_type":"Routine - Unscheduled","violation_id":"72169_20190326_103120","violation_description":"Moderate risk food holding temperature","risk_category":"Moderate Risk"}
,{"business_id":"98176","business_name":"PACIFIC CAFE","business_address":"7000 GEARY BLVD","business_city":"San Francisco","business_state":"CA","business_postal_code":"94121","business_phone_number":"+14155387091","inspection_id":"98176_20181120","inspection_date":"2018-11-20T00:00:00.000","inspection_type":"New Ownership"}
,{"business_id":"86870","business_name":"Turtle Tower Restaurant","business_address":"501 06th St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94103","business_phone_number":"+14155403333","inspection_id":"86870_20190128","inspection_date":"2019-01-28T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"85594","business_name":"The Pearl","business_address":"601 19th St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94107","business_phone_number":"+14155267171","inspection_id":"85594_20171013","inspection_date":"2017-10-13T00:00:00.000","inspection_type":"Non-inspection site visit"}
,{"business_id":"82690","business_name":"Hula Truck","business_address":"Off The Grid","business_city":"San Francisco","business_state":"CA","business_phone_number":"+14158469350","inspection_id":"82690_20160812","inspection_date":"2016-08-12T00:00:00.000","inspection_type":"Reinspection/Followup"}
,{"business_id":"84982","business_name":"Pa'ina Restaurant and Lounge","business_address":"1865 Post St","business_city":"San Francisco","business_state":"CA","business_postal_code":"94115","business_phone_number":"+14155822642","inspection_id":"84982_20190327","inspection_date":"2019-03-27T00:00:00.000","inspection_type":"Reinspection/Followup"},
]