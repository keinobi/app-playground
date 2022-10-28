import { type IProduct } from '@/lib/data/products';
import { ProductEstimatedArrival } from '@/ui/ProductEstimatedArrival';
import { ProductLowStockWarning } from '@/ui/ProductLowStockWarning';
import { ProductPrice } from '@/ui/ProductPrice';
import { ProductRating } from '@/ui/ProductRating';
import { ProductSplitPayments } from '@/ui/ProductSplitPayments';
import { ProductUsedPrice } from '@/ui/ProductUsedPrice';
import { dinero, type DineroSnapshot } from 'dinero.js';
import Image from 'next/image';

export const Product = ({ product }: { product: IProduct }) => {
  const price = dinero(product.price as DineroSnapshot<number>);

  return (
    <div className="grid grid-cols-8 gap-6">
      <div className="col-span-2">
        <div className="space-y-2">
          <Image
            src={`/${product.image}`}
            className="rounded-lg"
            alt={product.name}
            height={400}
            width={400}
            placeholder="blur"
            blurDataURL={product.imageBlur}
            priority
          />

          <div className="flex space-x-2">
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg"
                alt={product.name}
                height={80}
                width={80}
                placeholder="blur"
                blurDataURL={product.imageBlur}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg"
                alt={product.name}
                height={80}
                width={80}
                placeholder="blur"
                blurDataURL={product.imageBlur}
              />
            </div>
            <div className="w-1/3">
              <Image
                src={`/${product.image}`}
                className="rounded-lg"
                alt={product.name}
                height={80}
                width={80}
                placeholder="blur"
                blurDataURL={product.imageBlur}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-4 space-y-6">
        <div className="truncate text-2xl font-medium text-white">
          {product.name}
        </div>
        <ProductRating rating={product.rating} />
        <div className="space-y-4 text-zinc-200">
          <p>
            Streaming allows you to progressively render and send units of the
            UI from the server to the client.
          </p>
          <p>
            In this example product page, you’ll notice we instantly load a
            light shell. Then, the user’s avatar and product information loads,
            followed by secondary information like recommended items and
            reviews.
          </p>
          <p>
            This allows the user to see and interact with the most essential
            parts of the page while the rest of the content loads - instead of
            waiting for the whole page to load before they can interact with
            anything.
          </p>

          <p>
            To learn more about streaming, see the{' '}
            <a
              className="font-medium text-white"
              href="https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense"
            >
              Streaming and Suspense Docs
            </a>
            .
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <div className="space-y-4 rounded-lg bg-zinc-900 p-3">
          <ProductPrice price={price} discount={product.discount} />

          <ProductSplitPayments price={price} />

          {product.usedPrice ? (
            <ProductUsedPrice usedPrice={product.usedPrice} />
          ) : null}

          <ProductEstimatedArrival leadTime={product.leadTime} />

          {product.stock <= 1 ? (
            <ProductLowStockWarning stock={product.stock} />
          ) : null}

          <div className="space-y-2">
            <button className="w-full rounded-lg bg-zinc-700 px-3 py-1 text-sm font-medium text-zinc-100 hover:bg-zinc-500 hover:text-white">
              Add to Basket
            </button>

            <button className="w-full rounded-lg  bg-vercel-blue px-3 py-1 text-sm font-medium  text-white hover:bg-vercel-blue/90">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
