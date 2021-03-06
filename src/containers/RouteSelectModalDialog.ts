import {StoreState} from '../types/index';
import {connect, Dispatch} from 'react-redux';
import RouteSelectModalDialog from '../components/RouteSelectModalDialog';
import {
    addAdditionalRoutes, changeAdditionalRoutes, clearAdditionalAddress, clearRouteFromDestination,
    clearRouteFromSource, clearSelectedRoutes, fetchRouteFromDestination, fetchRouteFromSource, hideModal,
    SelectRouteAction, selectRouteFromDestination, selectRouteFromSource
} from '../actions/index';
import {CurrentModal} from '../constants/index';
import DirectionsRoutePair from '../entities/DirectionsRoutePair';
import AutocompletePrediction = google.maps.places.AutocompletePrediction;
import IdentifiableDirectionsRoute from '../entities/IdentifiableDirectionsRoute';
/**
 * Created by shine on 1/7/2017.
 */
function mapStateToProps(s: StoreState) {
    let source = s.additionalAddress;
    if (s.currentModal === CurrentModal.ChangeRouteModal) {
        source = (s.additionalRoutes.find(x => x.id === s.expandedRouteId) as DirectionsRoutePair).address;
    }

    return {
        currentModal: s.currentModal,
        source: source as AutocompletePrediction,
        destination: s.selectedWorkAddress as AutocompletePrediction,
        routesFromSource: s.routesFromSource,
        routesFromDestination: s.routesFromDestination,
        selectedRouteIdFromSource: s.selectedRouteIdFromSource,
        selectedRouteIdFromDestination: s.selectedRouteIdFromDestination,
        existingPairId: s.expandedRouteId
    };
}

function mapDispatchToProps(d: Dispatch<SelectRouteAction>) {
    return {
        onSelectRouteFromSource: (s: string) => { d(selectRouteFromSource(s)); },
        onSelectRouteFromDestination: (s: string) => { d(selectRouteFromDestination(s)); },
        onCloseModal: () => {
            d(hideModal());
            d(clearRouteFromSource());
            d(clearRouteFromDestination());
            d(clearSelectedRoutes());
            d(clearAdditionalAddress());
        },
        onConfirmAdditionalRoutes: (routes: DirectionsRoutePair) => {
            d(addAdditionalRoutes(routes));
        },
        onConfirmChangeRoutes: (existingPairId: string, routes: DirectionsRoutePair) => {
            d(changeAdditionalRoutes(existingPairId, routes));
        },
        onReceiveRouteFromSource: (routes: IdentifiableDirectionsRoute[]) => {
            d(fetchRouteFromSource(routes));
        },
        onReceiveRouteFromDestination: (routes: IdentifiableDirectionsRoute[]) => {
            d(fetchRouteFromDestination(routes));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteSelectModalDialog);
