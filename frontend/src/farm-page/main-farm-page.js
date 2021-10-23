import FarmPageHeader from "./header";

const FarmPage = ({farm}) => {
    return (
        <div>
            <FarmPageHeader name={farm.name} phone={farm.phone}
                address={farm.address} city={farm.city} state={farm.state} zip={farm.zip}/>
        </div>
    );
}

export default FarmPage;