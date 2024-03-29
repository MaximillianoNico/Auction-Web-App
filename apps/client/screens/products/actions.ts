import { useEffect, useState } from "react"
import moment from 'moment';
import Products from "../../utils/apis/products";
import useProductBid from "../../utils/hooks/useProductBid";

const TABS = {
  ONGOING: "Ongoing",
  COMPLETED: "Completed"
}

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [activeTab, setActiveTab] = useState(TABS?.ONGOING)
  const { products: productUpdated } = useProductBid("")

  const handleChangeTab = (tab) => setActiveTab(tab);

  useEffect(() => {
    const GetProducts = async ({ isPublished = false, isAchieve = false }) => {
      const { data, errors } = await Products.Products({ isPublished, isAchieve });

      if (errors) {
        setError(errors.response.data?.errors)

        return;
      }

      const newProducts = data?.length && data.filter(
        ({ lastTimeAuction }) => {
          const lastBidTime = moment(lastTimeAuction).diff(
            moment(),
            'hours'
          )

          if (activeTab === TABS.COMPLETED) return true

          return lastBidTime > 0 && activeTab === TABS?.ONGOING
        }
      )

      setError(null);
      setProducts(newProducts);
    };

    GetProducts({ isPublished: true, isAchieve: !(activeTab === TABS?.ONGOING)}); // Search Product
  }, [activeTab]);

  useEffect(() => {
    if (productUpdated?.length) {
      const currentIds = products?.map(({ _id }) => _id);
      const newProductUpdated = productUpdated?.filter(
        ({ _id }) => currentIds.includes(_id)
      )
      // const newProduct = products.map()
      setProducts(newProductUpdated)
    }
  }, [productUpdated])

  return {
    activeTab,
    data: products,
    error,
    onChangeTab: handleChangeTab,
    TABS
  }
}

export default useProducts;
