import Api from '@/services/Api'

export default {
  fetchPlaces () {
    return Api().get('places')
  }
}
