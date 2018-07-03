-- Type Synonyms
type String' = [Char]

type Point = (Double,Double)

midpoint :: (Double,Double) -> (Double,Double)
            -> (Double,Double)
midpoint (x1,y1) (x2,y2) =
  ((x1 + x2) / 2, (y1 + y2) / 2)

midpoint' :: Point -> Point -> Point
midpoint' (x1,y1) (x2,y2) =
  ((x1 + x2) / 2, (y1 + y2) / 2)

-- Newtype
newtype CustomerId = CustomerId Int

customer :: CustomerId
customer = CustomerId 13

customerToInt :: CustomerId -> Int
customerToInt (CustomerId i) = i

-- Records
data Customer = Customer
  { customerId  :: CustomerId
  , name        :: String
  , luckyNumber :: Int
  }

alice :: Customer
alice = Customer
  { customerId    = CustomerId 13
  , name          = "Alice"
  , luckyNumber   = 42
  }

sally = alice { name = "Sally", luckyNumber = 84 }

-- Algebraic Data Types
data Customer' = Customer' CustomerId String Int

alice' :: Customer'
alice' = Customer' (CustomerId 13) "Alice" 42

getCustomerId :: Customer -> CustomerId
getCustomerId (Customer cust_id _ _) = cust_id

data RGB = RGB Double Double Double

data StringTree = StringTree String [StringTree]

hierarchy = StringTree "C:"
  [ StringTree "Program Files" []
  , StringTree "Users"
      [StringTree "Alice" []]
  , StringTree "Cats" []
  ]

-- Algebraic Data Type Constructors
data Bool' = False' | True'

negate' :: Bool' -> Bool'
negate' True' = False'
negate' False' = True'

data DialogResponse = Yes | No | Help | Quit

data MaybeInt = NoInt | JustInt Int

defaultInt :: Int -> MaybeInt -> Int
defaultInt defaultValue NoInt = defaultValue
defaultInt _ (JustInt x) = x

data StringList = EmptyStringList
                | ConsStringList String StringList

lengthStringList :: StringList -> Int
lengthStringList EmptyStringList = 0
lengthStringList (ConsStringList _ xs) =
  1 + lengthStringList xs

data Maybe' a = Just' a | Nothing'

fromMaybe' :: a -> Maybe' a -> a
fromMaybe' defaultVal Nothing' = defaultVal
fromMaybe' _ (Just' x) = x

data List a = Empty | Cons a (List a)
