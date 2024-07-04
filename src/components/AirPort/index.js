
const airportsList = [{
    id: uuidv4(),
    title: "Indira Gandhi International Airport",
    country: "India",
    code: "DEL",
    terminals: 3,
},{
    id: uuidv4(),
    title: "Dubai International Airport",
    country: "UAE",
    code: "DXB",
    terminals: 5,
},{
    id: uuidv4(),
    title: "Heathrow Airport",
    country: "England",
    code: "LHR",
    terminals: 6,
},{
    id: uuidv4(),
    title: "Istanbul Airport",
    country: "Turkey",
    code: "IST",
    terminals: 3,
},{
    id: uuidv4(),
    title: "Rajiv Gandhi International Airport",
    country: "Texas",
    code: "DFW",
    terminals: 14,
}]

const AirPort = () =>(
    <AirPortContainer>
        <AirPortHeadingContainer>
            <AirPortHeading>
                Airports
            </AirPortHeading>
            <AirPortAddNoteButton>
                + Add new
            </AirPortAddNoteButton>
        </AirPortHeadingContainer>
        <UnOrderedAirPortList>
            <AirPortListHeading>
                <ListTitle>All Airports</ListTitle>
                <ListCountry>Country</ListCountry>
                <ListCountryCode>Code</ListCountryCode>
                <ListTerminals>Terminals</ListTerminals>
            </AirPortListHeading>
            {}
        </UnOrderedAirPortList>
    </AirPortContainer>
)

export default AirPort;